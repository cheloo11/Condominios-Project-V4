const Anuncios = require("../models/Anuncios");

exports.crearAnuncio = async (req, res) => {
  try {
    const nuevoAnuncio = new Anuncios(req.body);
    await nuevoAnuncio.save();
    res.status(201).json(nuevoAnuncio);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear anuncio" });
  }
};

exports.obtenerAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncios.find();
    res.json(anuncios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener anuncios" });
  }
};

exports.actualizarAnuncio = async (req, res) => {
  try {
    const anuncio = await Anuncios.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(anuncio);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar anuncio" });
  }
};

exports.eliminarAnuncio = async (req, res) => {
  try {
    await Anuncios.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Anuncio eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar anuncio" });
  }
};
