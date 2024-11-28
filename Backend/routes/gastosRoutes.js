const express = require("express");
const {
  crearGasto,
  obtenerGastos,
  actualizarGasto,
  eliminarGasto,
} = require("../controllers/gastosController");

const router = express.Router();

// Crear un nuevo gasto común
router.post("/", crearGasto);

// Obtener todos los gastos comunes
router.get("/", obtenerGastos);

// Actualizar un gasto común por ID
router.put("/:id", actualizarGasto);

// Eliminar un gasto común por ID
router.delete("/:id", eliminarGasto);

module.exports = router;
