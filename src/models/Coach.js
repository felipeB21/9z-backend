const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const coachSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
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
  image: {
    type: String,
    required: false,
  },
});

const Coach = mongoose.models.Coach || mongoose.model("Coach", coachSchema);
module.exports = Coach;
