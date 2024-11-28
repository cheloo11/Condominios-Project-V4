const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  fechaReserva: {
    type: Date,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
  estacionamiento: {
    type: String, // Solo se asigna si el área es "Estacionamiento"
    default: "",
  },
});

const Reservas = mongoose.model("Reserva", reservaSchema);
module.exports = Reservas;
