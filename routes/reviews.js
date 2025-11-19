const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Agregar reseña a un juego
router.post("/:gameId", async (req, res) => {
  try {
    const juego = await Game.findById(req.params.gameId);
    if (!juego) return res.status(404).json({ message: "Juego no encontrado" });

    juego.resenas.push(req.body); // { autor, comentario }
    await juego.save();

    res.status(201).json(juego);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;