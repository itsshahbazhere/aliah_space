const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  programmes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Programmes",
  }],
});

module.exports = mongoose.model("Department", departmentSchema)
