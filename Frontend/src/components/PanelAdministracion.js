import React, { useState } from "react";
import Navbar from "./Navbar"; // Importar el componente Navbar
import Footer from "./Footer"; // Importar el componente Footer
import GestionGastosYMultas from "./GestionGastosyMultas"; // Importar el componente de gastos comunes y multas
import AreasComunes from "./AreasComunes"; // Componente para Áreas Comunes
import GestionUsuarios from "./GestionUsuarios"; // Componente para gestión de usuarios
import Anuncios from "./Anuncios"; // Componente para anuncios

const PanelAdministracion = () => {
  const [showGastosYMultas, setShowGastosYMultas] = useState(false);
  const [showAreasComunes, setShowAreasComunes] = useState(false);
  const [showGestionUsuarios, setShowGestionUsuarios] = useState(false);
  const [showAnuncios, setShowAnuncios] = useState(false);

  // Funciones para manejar la visibilidad
  const toggleGastosYMultas = () => setShowGastosYMultas(!showGastosYMultas);
  const toggleAreasComunes = () => setShowAreasComunes(!showAreasComunes);
  const toggleGestionUsuarios = () =>
    setShowGestionUsuarios(!showGestionUsuarios);
  const toggleAnuncios = () => setShowAnuncios(!showAnuncios);

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { role: "admin" }), // Pasar el rol al Navbar

    React.createElement(
      "div",
      { className: "container mt-5" },
      React.createElement(
        "h1",
        { className: "text-center" },
        "Panel de Administración"
      ),

      // Cuadro para Gastos Comunes y Multas
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        }, // Ajustar el ancho de la tarjeta
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Gastos Comunes y Multas"), // Título del cuadro
          React.createElement(
            "button",
            {
              className: "btn btn-info", // Botón más llamativo
              onClick: toggleGastosYMultas, // Llama a la función de visibilidad
            },
            showGastosYMultas ? "Ocultar Funciones" : "Mostrar Funciones" // Cambia el texto del botón
          )
        ),
        showGastosYMultas && React.createElement(GestionGastosYMultas, null) // Muestra el componente si es verdadero
      ),

      // Cuadro para Áreas Comunes
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        }, // Ajustar el ancho de la tarjeta
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Áreas Comunes"), // Título del cuadro
          React.createElement(
            "button",
            {
              className: "btn btn-info", // Botón más llamativo
              onClick: toggleAreasComunes, // Llama a la función de visibilidad
            },
            showAreasComunes ? "Ocultar Funciones" : "Mostrar Funciones" // Cambia el texto del botón
          )
        ),
        showAreasComunes && React.createElement(AreasComunes, null) // Muestra el componente si es verdadero
      ),

      // Cuadro para Gestión de Usuarios
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        }, // Ajustar el ancho de la tarjeta
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Gestión de Usuarios"), // Título del cuadro
          React.createElement(
            "button",
            {
              className: "btn btn-info", // Botón más llamativo
              onClick: toggleGestionUsuarios, // Llama a la función de visibilidad
            },
            showGestionUsuarios ? "Ocultar Funciones" : "Mostrar Funciones" // Cambia el texto del botón
          )
        ),
        showGestionUsuarios && React.createElement(GestionUsuarios, null) // Muestra el componente si es verdadero
      ),

      // Cuadro para Anuncios
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        }, // Ajustar el ancho de la tarjeta
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Anuncios"), // Título del cuadro
          React.createElement(
            "button",
            {
              className: "btn btn-info", // Botón más llamativo
              onClick: toggleAnuncios, // Llama a la función de visibilidad
            },
            showAnuncios ? "Ocultar Funciones" : "Mostrar Funciones" // Cambia el texto del botón
          )
        ),
        showAnuncios && React.createElement(Anuncios, null) // Muestra el componente si es verdadero
      )
    ),
    React.createElement(Footer, null) // Agregar el componente Footer
  );
};

export default PanelAdministracion;
