const express = require("express");
const {
  crearMulta,
  obtenerMultas,
  actualizarMulta,
  eliminarMulta,
  obtenerMultasPorUsuario,
} = require("../controllers/multasController");

const router = express.Router();

// Crear una nueva multa
router.post("/", crearMulta);

// Obtener todas las multas
router.get("/", obtenerMultas);

// Actualizar una multa por ID
router.put("/:id", actualizarMulta);

// Eliminar una multa por ID
router.delete("/:id", eliminarMulta);

// Obtener multas por usuario (ruta específica)
router.get("/usuario/:id", obtenerMultasPorUsuario);

module.exports = router;
