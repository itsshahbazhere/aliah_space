const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    years: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "YearsPaper",
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Branch", branchSchema);
