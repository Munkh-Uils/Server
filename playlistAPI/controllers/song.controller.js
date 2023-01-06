const { Song } = require("../models");

const createSong = async (req, res) => {
  const body = req.body;
  const result = await new Song(body).save();
  res.send(result);
};

const getSongs = async (req, res) => {
  const result = await Song.find({}).populate("artist");
  res.send(result);
};

const getSong = async (req, res) => {
  const result = await Song.findById(req.params.id).populate("artist");
  res.send(result);
};

const addArtistToSong = async (req, res) => {
  const songId = req.params.id;

  const artistId = req.body.artistId;

  try {
    const song = await Song.findById(songId);
    song.artist.push(artistId);

    await song.save();
  } catch (error) {}
};

module.exports = { createSong, getSongs, getSong };
