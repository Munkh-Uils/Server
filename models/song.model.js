const { Schema, model } = require("mongoose");

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Song = model("Song", songSchema);

module.exports = Song;
