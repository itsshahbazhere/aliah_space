const mongoose = require("mongoose");

const yearsPaperSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      tyep: String,
      default: "",
    },
    subjects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    }],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("YearsPaper", yearsPaperSchema);
