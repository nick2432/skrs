const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
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

module.exports = mongoose.model("Passanger",  passengerSchema);