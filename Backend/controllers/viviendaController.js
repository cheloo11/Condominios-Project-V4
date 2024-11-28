const Vivienda = require("../models/Vivienda");

// Crear una nueva vivienda
exports.crearVivienda = async (req, res) => {
  try {
    const nuevaVivienda = new Vivienda(req.body);
    await nuevaVivienda.save();
    res.status(201).json(nuevaVivienda);
  } catch (error) {
    console.error("Error al crear vivienda:", error.message);
    res.status(500).json({ mensaje: "Error al crear vivienda" });
  }
};

// Obtener todas las viviendas
exports.obtenerViviendas = async (req, res) => {
  try {
    const viviendas = await Vivienda.find()
      .populate("condominioId")
      .populate("residenteId");
    res.json(viviendas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener viviendas" });
  }
};

// Actualizar una vivienda por ID
exports.actualizarVivienda = async (req, res) => {
  try {
    const vivienda = await Vivienda.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(vivienda);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar vivienda" });
  }
};

// Eliminar una vivienda por ID
exports.eliminarVivienda = async (req, res) => {
  try {
    await Vivienda.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Vivienda eliminada" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar vivienda" });
  }
};
