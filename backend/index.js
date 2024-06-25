require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const {HoldingsModel} = require("./models/HoldingsModel.js");
const {PositionsModel} = require("./models/PositionsModel.js");

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

app.get("/allholdings", async(req, res)=> {
    let allholdings = await HoldingsModel.find({});
    // console.log(allholdings);
    res.json(allholdings);
})

app.get("/allpositions", async(req, res)=> {
  let allpositions = await PositionsModel.find({});
  console.log(allpositions);
  res.send("got the positions data");
})

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
