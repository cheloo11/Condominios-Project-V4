const Condominio = require("../models/Condominio");

// Crear un nuevo condominio
exports.crearCondominio = async (req, res) => {
  try {
    const nuevoCondominio = new Condominio(req.body);
    await nuevoCondominio.save();
    res.status(201).json(nuevoCondominio);
  } catch (error) {
    console.error("Error al crear condominio:", error.message);
    res.status(500).json({ mensaje: "Error al crear condominio" });
  }
};

// Obtener todos los condominios
exports.obtenerCondominios = async (req, res) => {
  try {
    const condominios = await Condominio.find();
    res.json(condominios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener condominios" });
  }
};

// Actualizar un condominio por ID
exports.actualizarCondominio = async (req, res) => {
  try {
    const condominio = await Condominio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!condominio) {
      return res.status(404).json({ mensaje: "Condominio no encontrado" });
    }
    res.json(condominio);
  } catch (error) {
    console.error("Error al actualizar condominio:", error.message);
    res
      .status(500)
      .json({
        mensaje: "Error al actualizar condominio",
        error: error.message,
      });
  }
};

// Eliminar un condominio por ID
exports.eliminarCondominio = async (req, res) => {
  try {
    await Condominio.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Condominio eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar condominio" });
  }
};
