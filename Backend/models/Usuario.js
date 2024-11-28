// models/Usuario.js
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: {
    type: String,
    required: true,
    enum: ["admin", "conserje", "directiva", "residente"],
  },
  fechaC: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
