const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  imagen: { type: String },
  completado: { type: Boolean, default: false },
  resenas: [
    {
      autor: String,
      comentario: String
    }
  ],
  fechaCreacion: { type: Date, default: Date.now }
});

// Transformación para asegurar que _id se convierta a string
gameSchema.set('toJSON', {
  transform: function(doc, ret) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model("Game", gameSchema);