const express = require("express");
const {
  crearVivienda,
  obtenerViviendas,
  actualizarVivienda,
  eliminarVivienda,
} = require("../controllers/viviendaController");

const router = express.Router();

// Crear una nueva vivienda
router.post("/", crearVivienda);

// Obtener todas las viviendas
router.get("/", obtenerViviendas);

// Actualizar una vivienda por ID
router.put("/:id", actualizarVivienda);

// Eliminar una vivienda por ID
router.delete("/:id", eliminarVivienda);

module.exports = router;
