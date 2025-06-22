const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  Branch: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Branch",
  }],
});

module.exports = mongoose.model("Department", departmentSchema)
