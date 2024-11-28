const Multas = require("../models/Multas");

exports.crearMulta = async (req, res) => {
  try {
    const nuevaMulta = new Multas(req.body);
    await nuevaMulta.save();
    res.status(201).json(nuevaMulta);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear multa" });
  }
};

exports.obtenerMultas = async (req, res) => {
  try {
    const multas = await Multas.find();
    res.json(multas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener multas" });
  }
};

exports.actualizarMulta = async (req, res) => {
  try {
    const multa = await Multas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(multa);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar multa" });
  }
};

exports.eliminarMulta = async (req, res) => {
  try {
    await Multas.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Multa eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar multa" });
  }
};

exports.obtenerMultasPorUsuario = async (req, res) => {
  const { userId } = req.params; // Extrae el userId desde la ruta

  try {
    // Busca multas asociadas al usuario
    const multas = await Multas.find({ usuarioId: userId });

    if (multas.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron multas para este usuario." });
    }

    res.json(multas);
  } catch (error) {
    res.status(500).json({
      message: "Error al consultar las multas.",
      error: error.message,
    });
  }
};
