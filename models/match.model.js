const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema(
  {
    teamA: {
      type: mongoose.Schema.ObjectId,
      ref: "Team",
    },
    teamB: {
      type: mongoose.Schema.ObjectId,
      ref: "Team",
    },
    datetime: {
      type: Date,
      required: true,
    },
    seriesId: {
      type: mongoose.Schema.ObjectId,
      ref: "series",
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
