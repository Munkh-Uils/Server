
const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;