const express = require("express");

const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarioController");

const router = express.Router();

// Crear un nuevo usuario
router.post("/", crearUsuario);

// Obtener todos los usuarios
router.get("/", obtenerUsuarios);

// Actualizar un usuario por id
router.put("/:id", actualizarUsuario);

// Eliminar un usuario por id
router.delete("/:id", eliminarUsuario);

module.exports = router;
