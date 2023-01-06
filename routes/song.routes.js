

const express = require("express");
const { songController } = require("../controllers");

const router = express.Router();

router
  .get("/songs", songController.getSongs)
  .get("/song/:id", songController.getSong)
  .post("/songs", songController.createSong)
  .put("songs/:id", () => {})
  .put("/song/:id/artist", () => {})
  .delete("/song/:id", () => {});

exports.songRoutes = router;