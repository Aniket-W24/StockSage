const { model } = require("mongoose");

const { userSchema } = require("../schemas/userSchema.js");

const UsersModel = new model("User", userSchema);

module.exports = { UsersModel };
