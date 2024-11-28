import React, { useState, useEffect } from "react";
import { format } from "date-fns"; // Importamos la función 'format' de date-fns
import Navbar from "../Navbar";
import Footer from "../Footer";

const CrearAnuncios = () => {
  const [nuevoAnuncio, setNuevoAnuncio] = useState({
    titulo: "",
    contenido: "",
  });
  const [anuncios, setAnuncios] = useState([]);

  // Función para formatear la fecha
  const formatDate = (date) => {
    return format(new Date(date), "dd-MM-yyyy"); // Formato de fecha "dd-MM-yyyy"
  };

  // Cargar anuncios desde la API
  const fetchAnuncios = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/anuncios");
      const data = await response.json();
      if (response.ok) {
        // Formatear las fechas antes de guardarlas en el estado
        const anunciosConFechaFormateada = data.map((anuncio) => ({
          ...anuncio,
          fechaPublicacion: formatDate(anuncio.fechaPublicacion),
        }));
        setAnuncios(anunciosConFechaFormateada);
      } else {
        console.error("Error al cargar los anuncios");
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nuevoAnuncio.titulo.trim() && nuevoAnuncio.contenido.trim()) {
      try {
        const response = await fetch("http://localhost:3000/api/anuncios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo: nuevoAnuncio.titulo,
            contenido: nuevoAnuncio.contenido,
          }),
        });

        if (response.ok) {
          alert("Anuncio creado exitosamente");
          // Limpiar formulario
          setNuevoAnuncio({ titulo: "", contenido: "" });
          // Recargar los anuncios
          fetchAnuncios();
        } else {
          console.error("Error al crear el anuncio");
        }
      } catch (error) {
        console.error("Error al conectar con el servidor:", error);
      }
    } else {
      alert("Por favor, complete todos los campos");
    }
  };

  // Llamamos a la API al cargar el componente
  useEffect(() => {
    fetchAnuncios();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoAnuncio((prevAnuncio) => ({
      ...prevAnuncio,
      [name]: value,
    }));
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "container mt-5" },
      React.createElement("h2", { className: "text-center" }, "Crear Anuncio"),
      React.createElement(
        "form",
        {
          onSubmit: handleSubmit,
          className: "form-anuncio bg-light p-4 rounded",
        },
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", null, "Título del anuncio:"),
          React.createElement("input", {
            type: "text",
            name: "titulo",
            value: nuevoAnuncio.titulo,
            onChange: handleChange,
            placeholder: "Título del anuncio",
            required: true,
            className: "form-control",
          })
        ),
        React.createElement(
          "div",
          { className: "form-group" },
          React.createElement("label", null, "Contenido del anuncio:"),
          React.createElement("textarea", {
            name: "contenido",
            value: nuevoAnuncio.contenido,
            onChange: handleChange,
            placeholder: "Contenido del anuncio",
            required: true,
            className: "form-control",
          })
        ),
        React.createElement(
          "button",
          { type: "submit", className: "btn btn-primary mt-3" },
          "Publicar"
        )
      ),
      React.createElement("h3", { className: "mt-5" }, "Anuncios Publicados"),
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "Título"),
            React.createElement("th", null, "Contenido"),
            React.createElement("th", null, "Fecha de Publicación")
          )
        ),
        React.createElement(
          "tbody",
          null,
          anuncios.map((anuncio, index) =>
            React.createElement(
              "tr",
              { key: index },
              React.createElement("td", null, anuncio.titulo),
              React.createElement("td", null, anuncio.contenido),
              React.createElement("td", null, anuncio.fechaPublicacion)
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default CrearAnuncios;
