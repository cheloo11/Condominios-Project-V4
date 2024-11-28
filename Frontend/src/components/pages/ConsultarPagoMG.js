import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faClipboardList,
  faEdit,
} from "@fortawesome/free-solid-svg-icons"; // Importa los iconos que necesites

const ConsultarPagoMultasYGastos = () => {
  const handleConsultarPagoGastosComunes = () => {
    window.location.href = "/consultar-pago-gastos-comunes"; // Redirige a la página de consulta de pago de gastos comunes
  };

  const handleConsultarPagoMultas = () => {
    window.location.href = "/consultar-pago-multas"; // Redirige a la página de consulta de pago de multas
  };

  const handleRegistrarPagoGastoComun = () => {
    window.location.href = "/registrar-pago-gasto-comun"; // Redirige a la página de registro de pago de gasto común
  };

  return React.createElement(
    "div",
    { className: "card mb-0 shadow" },
    React.createElement(
      "div",
      { className: "card-body text-center" },
      React.createElement(
        "div",
        { className: "d-flex flex-column align-items-center" },
        React.createElement(
          "button",
          {
            className: "btn btn-success w-100 m-2", // Cambié el color del botón
            onClick: handleConsultarPagoGastosComunes,
          },
          React.createElement(FontAwesomeIcon, { icon: faClipboardList }), // Icono para consultar gastos
          " Consultar Gastos Comunes"
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-success w-100 m-2", // Cambié el color del botón
            onClick: handleConsultarPagoMultas,
          },
          React.createElement(FontAwesomeIcon, { icon: faMoneyBillWave }), // Icono para consultar multas
          " Consultar Pago de Multas"
        )
      )
    )
  );
};

export default ConsultarPagoMultasYGastos;
