const Pago = require("../models/Pago");

// Crear un nuevo pago
exports.crearPago = async (req, res) => {
  try {
    const nuevoPago = new Pago(req.body);
    await nuevoPago.save();
    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error("Error al crear pago:", error.message);
    res.status(500).json({ mensaje: "Error al crear pago" });
  }
};

// Obtener todos los pagos
exports.obtenerPagos = async (req, res) => {
  try {
    const pagos = await Pago.find()
      .populate("usuarioId")
      .populate("condominioId");
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener pagos" });
  }
};

// Actualizar un pago por ID
exports.actualizarPago = async (req, res) => {
  try {
    const pago = await Pago.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(pago);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar pago" });
  }
};

// Eliminar un pago por ID
exports.eliminarPago = async (req, res) => {
  try {
    await Pago.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Pago eliminado" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar pago" });
  }
};

exports.obtenerPagosPorUsuario = async (req, res) => {
  const { userId } = req.params;

  try {
    // Consultar los pagos por usuarioId
    const pagos = await Pago.find({ usuarioId: userId, metodoPago: "manual" });

    if (pagos.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron pagos pendientes." });
    }

    res.json(pagos);
  } catch (error) {
    res.status(500).json({
      message: "Error al consultar los pagos.",
      error: error.message,
    });
  }
};
