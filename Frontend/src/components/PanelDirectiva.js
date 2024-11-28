import React, { useState } from "react";
import Navbar from "./Navbar"; // Importar el componente Navbar
import Footer from "./Footer"; // Importar el componente Footer
import ConsultarInformacionUsuarios from "./pages/ConsultarInformacionUsuarios"; // Componente para consultar información de usuarios
import ConsultarPagoMG from "./pages/ConsultarPagoMG"; // Componente para consultar pago de multas y gastos comunes
import VerMorosos from "./VerMorosos"; // Componente para ver morosos
import ReservarAreasComunes from "./ReservarAreasComunes"; // Componente para reservar áreas comunes
import IngresarMultas from "./IngresarMultas"; // Componente para ingresar multas
import Anuncios from "./Anuncios"; // Componente para crear anuncios

const PanelDirectiva = () => {
  const [
    showConsultarInformacionUsuarios,
    setShowConsultarInformacionUsuarios,
  ] = useState(false);
  const [showConsultarPagoMG, setShowConsultarPagoMG] = useState(false);
  const [showVerMorosos, setShowVerMorosos] = useState(false);
  const [showReservarAreasComunes, setShowReservarAreasComunes] =
    useState(false);
  const [showIngresarMultas, setShowIngresarMultas] = useState(false);
  const [showAnuncios, setShowAnuncios] = useState(false);

  // Funciones para manejar la visibilidad
  const toggleConsultarInformacionUsuarios = () =>
    setShowConsultarInformacionUsuarios(!showConsultarInformacionUsuarios);
  const toggleConsultarPagoMG = () =>
    setShowConsultarPagoMG(!showConsultarPagoMG);
  const toggleVerMorosos = () => setShowVerMorosos(!showVerMorosos);
  const toggleReservarAreasComunes = () =>
    setShowReservarAreasComunes(!showReservarAreasComunes);
  const toggleIngresarMultas = () => setShowIngresarMultas(!showIngresarMultas);
  const toggleAnuncios = () => setShowAnuncios(!showAnuncios);

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, { role: "directiva" }), // Pasar el rol al Navbar

    React.createElement(
      "div",
      { className: "container mt-5" },
      React.createElement(
        "h1",
        { className: "text-center" },
        "Panel de Directiva"
      ),

      // Cuadro para Consultar Información de Usuarios
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        },
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Consultar Información de Usuarios"),
          React.createElement(
            "button",
            {
              className: "btn btn-info",
              onClick: toggleConsultarInformacionUsuarios,
            },
            showConsultarInformacionUsuarios
              ? "Ocultar Funciones"
              : "Mostrar Funciones"
          )
        ),
        showConsultarInformacionUsuarios &&
          React.createElement(ConsultarInformacionUsuarios, null)
      ),

      // Cuadro para Consultar Pagos
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        },
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Consultas Monetarias"),
          React.createElement(
            "button",
            {
              className: "btn btn-info",
              onClick: toggleConsultarPagoMG,
            },
            showConsultarPagoMG ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showConsultarPagoMG && React.createElement(ConsultarPagoMG, null)
      ),

      // Cuadro para Ver Morosos
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        },
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Ver Morosos"),
          React.createElement(
            "button",
            { className: "btn btn-info", onClick: toggleVerMorosos },
            showVerMorosos ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showVerMorosos && React.createElement(VerMorosos, null)
      ),

      // Cuadro para Reservar Áreas Comunes
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        },
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Reservar Áreas Comunes"),
          React.createElement(
            "button",
            { className: "btn btn-info", onClick: toggleReservarAreasComunes },
            showReservarAreasComunes ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showReservarAreasComunes &&
          React.createElement(ReservarAreasComunes, null)
      ),

      // Cuadro para Ingresar Multas
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        },
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Ingresar Multas"),
          React.createElement(
            "button",
            { className: "btn btn-info", onClick: toggleIngresarMultas },
            showIngresarMultas ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showIngresarMultas && React.createElement(IngresarMultas, null)
      ),

      // Cuadro para Crear Anuncios
      React.createElement(
        "div",
        {
          className: "card mb-4",
          style: { maxWidth: "600px", margin: "0 auto" },
        },
        React.createElement(
          "div",
          {
            className:
              "card-header d-flex justify-content-between align-items-center",
          },
          React.createElement("h5", null, "Crear Anuncios"),
          React.createElement(
            "button",
            { className: "btn btn-info", onClick: toggleAnuncios },
            showAnuncios ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showAnuncios && React.createElement(Anuncios, null)
      )
    ),
    React.createElement(Footer, null) // Agregar el componente Footer
  );
};

export default PanelDirectiva;
