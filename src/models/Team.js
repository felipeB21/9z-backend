const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  rank: {
    type: Number,
    required: false,
  },
});

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);
module.exports = Team;
