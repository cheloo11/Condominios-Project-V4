const express = require("express");
const {
  crearPago,
  obtenerPagos,
  actualizarPago,
  eliminarPago,
  obtenerPagosPorUsuario,
} = require("../controllers/pagoController");

const router = express.Router();

// Crear un nuevo pago
router.post("/", crearPago);

// Obtener todos los pagos
router.get("/", obtenerPagos);

// Actualizar un pago por ID
router.put("/:id", actualizarPago);

// Eliminar un pago por ID
router.delete("/:id", eliminarPago);

// Ruta para obtener los pagos pendientes por ID de usuario
router.get("/usuario/:id", obtenerPagosPorUsuario);

module.exports = router;
