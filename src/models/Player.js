const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true,
    },
    team: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: false,
    },
    nationality: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);
module.exports = Player;
