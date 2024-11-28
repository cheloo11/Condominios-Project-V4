// models/GastosComunes.js
const mongoose = require("mongoose");

const gastosComunesSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  monto: { type: Number, required: true },
  fechaRegistro: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GastosComunes", gastosComunesSchema);
