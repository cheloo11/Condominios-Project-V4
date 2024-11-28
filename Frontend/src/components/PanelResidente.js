import React, { useState } from "react";
import Navbar from "./Navbar"; // Importar el componente Navbar
import Footer from "./Footer"; // Importar el componente Footer
import ConsultarPagosPendientes from "./pages/ConsultarPagosPendientes"; // Componente para consultar pagos pendientes
import ConsultarMultasR from "./pages/ConsultarMultasR"; // Componente para consultar multas
import VerMorosidadR from "./pages/VerMorosidadR"; // Componente para ver morosidad
import PagarGastoComun from "./pages/PagarGastoComun"; // Componente para pagar gasto común
import ReservarAreasComunes from "./ReservarAreasComunes"; // Componente para reservar áreas comunes

const PanelResidente = () => {
  const [showConsultarPagosPendientes, setShowConsultarPagosPendientes] =
    useState(false);
  const [showConsultarMultas, setShowConsultarMultas] = useState(false);
  const [showVerMorosidad, setShowVerMorosidad] = useState(false);
  const [showPagarGastoComun, setShowPagarGastoComun] = useState(false);
  const [showReservarAreasComunes, setShowReservarAreasComunes] =
    useState(false);

  // Funciones para manejar la visibilidad
  const toggleConsultarPagosPendientes = () =>
    setShowConsultarPagosPendientes(!showConsultarPagosPendientes);
  const toggleConsultarMultas = () =>
    setShowConsultarMultas(!showConsultarMultas);
  const toggleVerMorosidad = () => setShowVerMorosidad(!showVerMorosidad);
  const togglePagarGastoComun = () =>
    setShowPagarGastoComun(!showPagarGastoComun);
  const toggleReservarAreasComunes = () =>
    setShowReservarAreasComunes(!showReservarAreasComunes);

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "container mt-5" },
      React.createElement(
        "h1",
        { className: "text-center" },
        "Panel de Residente"
      ),

      // Cuadro para Consultar Pagos Pendientes
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
          React.createElement("h5", null, "Consultar Pagos"),
          React.createElement(
            "button",
            {
              className: "btn btn-info",
              onClick: toggleConsultarPagosPendientes,
            },
            showConsultarPagosPendientes
              ? "Ocultar Funciones"
              : "Mostrar Funciones"
          )
        ),
        showConsultarPagosPendientes &&
          React.createElement(ConsultarPagosPendientes, null)
      ),

      // Cuadro para Consultar Multas
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
          React.createElement("h5", null, "Consultar Multas"),
          React.createElement(
            "button",
            {
              className: "btn btn-info",
              onClick: toggleConsultarMultas,
            },
            showConsultarMultas ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showConsultarMultas && React.createElement(ConsultarMultasR, null)
      ),

      // Cuadro para Ver Morosidad
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
          React.createElement("h5", null, "Ver Morosidad"),
          React.createElement(
            "button",
            { className: "btn btn-info", onClick: toggleVerMorosidad },
            showVerMorosidad ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showVerMorosidad && React.createElement(VerMorosidadR, null)
      ),

      // Cuadro para Pagar Gasto Común
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
          React.createElement("h5", null, "Portal de Pagos"),
          React.createElement(
            "button",
            { className: "btn btn-info", onClick: togglePagarGastoComun },
            showPagarGastoComun ? "Ocultar Funciones" : "Mostrar Funciones"
          )
        ),
        showPagarGastoComun && React.createElement(PagarGastoComun, null)
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
      )
    ),
    React.createElement(Footer, null) // Agregar el componente Footer
  );
};

export default PanelResidente;
