const mongoose = require("mongoose");

const programmesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  years: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "YearsPaper",
    },
  ],
});

exports.module = mongoose.model("Programmes", programmesSchema);
