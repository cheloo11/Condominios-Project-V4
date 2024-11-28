const Reservas = require("../models/ReservaAreasComunes");

exports.crearReserva = async (req, res) => {
  try {
    const { area, fechaReserva, horaInicio, horaFin, estacionamiento } =
      req.body;

    // Validación básica de los campos
    if (!area || !fechaReserva || !horaInicio || !horaFin) {
      return res.status(400).json({ mensaje: "Faltan campos requeridos" });
    }

    // Si el área es estacionamiento, validar que se haya seleccionado un estacionamiento
    if (area === "Estacionamiento" && !estacionamiento) {
      return res
        .status(400)
        .json({ mensaje: "Se debe seleccionar un estacionamiento" });
    }

    // Crear nueva reserva
    const nuevaReserva = new Reservas({
      area,
      fechaReserva,
      horaInicio,
      horaFin,
      estacionamiento: area === "Estacionamiento" ? estacionamiento : "", // Solo asignar estacionamiento si el área es Estacionamiento
    });

    await nuevaReserva.save();
    res.status(201).json(nuevaReserva); // Enviar la reserva creada como respuesta
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la reserva", error });
  }
};

exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reservas.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener reservas" });
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reservas.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar reserva" });
  }
};

exports.eliminarReserva = async (req, res) => {
  try {
    await Reservas.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Reserva eliminada" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar reserva" });
  }
};

exports.verificarReserva = async (req, res) => {
  const { area, fechaReserva, horaInicio, horaFin } = req.body;

  try {
    const reservasExistentes = await Reserva.find({
      area,
      fechaReserva,
      $or: [{ horaInicio: { $lte: horaFin }, horaFin: { $gte: horaInicio } }],
    });

    if (reservasExistentes.length > 0) {
      return res.status(409).json({
        mensaje: "Ya existe una reserva en el área y horario seleccionados.",
      });
    }

    res.status(200).json({ mensaje: "El horario está disponible." });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al verificar las reservas.",
      error: error.message,
    });
  }
};
