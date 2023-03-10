const { Playlist } = require("../models");

const createPlaylist = async (req, res) => {
  const body = req.body;
  const result = await new Playlist(body).save();
  res.send(result);
};

const getPlaylists = async (req, res) => {
  const result = await Playlist.find({}).populate({
    path: "songs",
    populate: { path: "artist" },
  });
  res.send(result);
};

const getPlaylist = async (req, res) => {
  const result = await Playlist.findById(req.params.id).populate({
    path: "songs",
    populate: { path: "artist" },
  });
  res.send(result);
};

const addToPlaylist = async (req, res) => {
  const playlistId = req.params.id;
  const songId = req.body.id;
  const playlist = await Playlist.findById(playlistId);
  playlist.songs.push(songId);
  await playlist.save();
  res.send(playlist);
};

const deletePlaylist = async (req, res) => {
  const id = req.params.id;
  const result = await Playlist.findByIdAndDelete(id);
  res.send(result);
};

module.exports = { createPlaylist, getPlaylists, getPlaylist, addToPlaylist ,deletePlaylist};
