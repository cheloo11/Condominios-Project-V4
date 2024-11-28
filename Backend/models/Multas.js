// models/Multas.js
const mongoose = require("mongoose");

const multaSchema = new mongoose.Schema({
  residenteNombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  fechaMulta: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: String,
    required: true,
    enum: ["pendiente", "pagada"],
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario", // Asegúrate de que "Usuario" es el nombre correcto del modelo
    required: true,
  },
});

module.exports = mongoose.model("Multa", multaSchema);
