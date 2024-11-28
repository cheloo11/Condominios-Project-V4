const express = require("express");
const {
  crearAnuncio,
  obtenerAnuncios,
  actualizarAnuncio,
  eliminarAnuncio,
} = require("../controllers/anunciosController");

const router = express.Router();

// Crear un nuevo anuncio
router.post("/", crearAnuncio);

// Obtener todos los anuncios
router.get("/", obtenerAnuncios);

// Actualizar un anuncio por ID
router.put("/:id", actualizarAnuncio);

// Eliminar un anuncio por ID
router.delete("/:id", eliminarAnuncio);

module.exports = router;
