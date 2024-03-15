const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const matchSchema = new Schema({
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  streamers: [
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

const Match = mongoose.models.Match || mongoose.model("Match", matchSchema);
module.exports = Match;
