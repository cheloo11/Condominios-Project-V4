// models/Condominio.js
const mongoose = require("mongoose");

const condominioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  cuotaMantenimiento: { type: Number, required: true }, // Cuota mensual de mantenimiento
  superAdministradorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  }, // Administrador principal
  fechaCreacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Condominio", condominioSchema);
