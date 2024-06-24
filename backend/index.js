require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const mongo_Url = process.env.MONGO_URL;


main()
  .then(console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongo_Url);
}

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
