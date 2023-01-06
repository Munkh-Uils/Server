const { Schema, model } = require("mongoose");

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
  songs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Song",
    },
  ],
});

const Playlist = model("Playlists", playlistSchema);

module.exports = Playlist;

{/*  
  app.post(
    "/playlist", async (req,res) => {
      const body = req.body
      const newPlaylist = new PlaylistModel(body)
      await newplaylist.save()
      res.send("succesfuly created new playlist", newplaylist)
    }
  )
*/}