// models/Pago.js
const mongoose = require("mongoose");

const pagoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  monto: { type: Number, required: true },
  tipo: {
    type: String,
    required: true,
    enum: ["gasto_comun", "multa", "mantenimiento"],
  },
  fechaPago: { type: Date, default: Date.now },
  metodoPago: {
    type: String,
    default: "manual",
    enum: ["manual", "khipu", "webpay"],
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

module.exports = mongoose.model("Pago", pagoSchema);
