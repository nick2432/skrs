const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Distance: {
    type: Number,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Driver", driverSchema);