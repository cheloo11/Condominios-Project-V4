const express = require("express");
const {
  crearReserva,
  obtenerReservas,
  actualizarReserva,
  eliminarReserva,
  verificarReserva,
} = require("../controllers/reservasController");

const router = express.Router();

// Crear una nueva reserva de área común
router.post("/", crearReserva);

// Obtener todas las reservas de áreas comunes
router.get("/", obtenerReservas);

// Actualizar una reserva de área común por ID
router.put("/:id", actualizarReserva);

// Eliminar una reserva de área común por ID
router.delete("/:id", eliminarReserva);

// Ruta para verificar la disponibilidad
router.post("/verificar", verificarReserva);

module.exports = router;
