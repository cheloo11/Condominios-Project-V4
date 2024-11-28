const GastosComunes = require("../models/GastosComunes");

exports.crearGasto = async (req, res) => {
  try {
    const nuevoGasto = new GastosComunes(req.body);
    await nuevoGasto.save();
    res.status(201).json(nuevoGasto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear gasto" });
  }
};

exports.obtenerGastos = async (req, res) => {
  try {
    const gastos = await GastosComunes.find();
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener gastos" });
  }
};

exports.actualizarGasto = async (req, res) => {
  try {
    const gasto = await GastosComunes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(gasto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar gasto" });
  }
};

exports.eliminarGasto = async (req, res) => {
  try {
    await GastosComunes.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Gasto eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar gasto" });
  }
};
