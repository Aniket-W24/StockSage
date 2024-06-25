require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("./util/SecretToken");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModel.js");
const { PositionsModel } = require("./models/PositionsModel.js");
const {User} = require("./models/UsersModel.js");

const PORT = process.env.PORT || 3000;
const mongo_Url = process.env.MONGO_URL;

main()
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_Url);
}

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

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

app.get("/signup", async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
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

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
