// models/Anuncio.js
const mongoose = require("mongoose");

const anuncioSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fechaPublicacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Anuncio", anuncioSchema);
