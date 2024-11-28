const express = require("express");
const {
  crearCondominio,
  obtenerCondominios,
  actualizarCondominio,
  eliminarCondominio,
} = require("../controllers/condominioController");

const router = express.Router();

// Crear un nuevo condominio
router.post("/", crearCondominio);

// Obtener todos los condominios
router.get("/", obtenerCondominios);

// Actualizar un condominio por ID
router.put("/:id", actualizarCondominio);

// Eliminar un condominio por ID
router.delete("/:id", eliminarCondominio);

module.exports = router;
