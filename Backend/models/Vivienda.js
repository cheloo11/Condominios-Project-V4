// models/Vivienda.js
const mongoose = require("mongoose");

const viviendaSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  condominioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Condominio",
    required: true,
  },
  residenteId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }, // Residente actual
  propietarios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }], // Lista de propietarios
  fechaRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vivienda", viviendaSchema);
