const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema(
  {
    teamA: {
      type: mongoose.Schema.ObjectId,
      ref: "team",
    },
    teamB: {
      type: mongoose.Schema.ObjectId,
      ref: "team",
    },
    datetime: {
      type: Date,
      required: true,
    },
    seriesId: {
      type: mongoose.Schema.ObjectId,
      ref: "series",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
