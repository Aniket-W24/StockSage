require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("./util/SecretToken");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./models/HoldingsModel.js");
const { PositionsModel } = require("./models/PositionsModel.js");
const { UsersModel } = require("./models/UsersModel.js");
const { OrdersModel } = require("./models/OrdersModel.js");

const PORT = process.env.PORT || 3000;
const mongo_Url = process.env.MONGO_URL;

main()
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_Url);
}

app.use(cors({
  // origin: 'http://localhost:5173' || 'http://localhost:5174/', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow credentials
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//😂 Middleware for Authorisation
const userVerification = (req, res) => {
  console.log("middleware userVerification");
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await UsersModel.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}

app.post("/", userVerification)

app.get("/allholdings", async (req, res) => {
  let allholdings = await HoldingsModel.find({});
  // console.log(allholdings);
  res.json(allholdings);
});

app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionsModel.find({});
  // console.log(allpositions);
  res.json(allpositions);
});

//😂 Signup Route
app.post("/signup", async (req, res, next) => {
  const users = await UsersModel.find({});
  // console.log(users);
  //res.json(users);
  console.log(req.body);
  try {
    // console.log(req.body);
    const { email, password, username } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UsersModel.create({ email, password, username });
    const token = createSecretToken(user._id);
    console.log(token);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
});

//😂 Login Route
app.post("/login", async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
});

//😂 New order route
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
