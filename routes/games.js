const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Obtener todos los juegos
router.get("/", async (req, res) => {
  try {
    const juegos = await Game.find().sort({ fechaCreacion: -1 });
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo juego
router.post("/", async (req, res) => {
  const juego = new Game(req.body);
  try {
    const nuevoJuego = await juego.save();
    res.status(201).json(nuevoJuego);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un juego por ID - CORREGIDO
router.delete("/:id", async (req, res) => {
  try {
    const juego = await Game.findByIdAndDelete(req.params.id);
    if (!juego) return res.status(404).json({ message: "Juego no encontrado" });
    
    res.json({ message: "Juego eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;