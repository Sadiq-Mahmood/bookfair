const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("Register", signUpSchema);
