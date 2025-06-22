const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    Department: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);
