import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faFileAlt,
  faUsers,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const GestionGastosYMultas = () => {
  const handleGestionGastos = () => {
    window.location.href = "/gestion-gastos"; // Redirige a la página de gestión de gastos
  };

  const handleGestionMultas = () => {
    window.location.href = "/gestion-multas"; // Redirige a la página de gestión de multas
  };

  const handleVerMorosos = () => {
    window.location.href = "/ver-morosos"; // Redirige a la página de morosos
  };

  const handleVerificarPagos = () => {
    window.location.href = "/verificar-pagos"; // Redirige a la página de verificación de pagos
  };

  const handleModificarMulta = () => {
    window.location.href = "/modificar-multa"; // Redirige a la página de modificación de multas
  };

  return React.createElement(
    "div",
    { className: "card mb-0 shadow" }, // Agregar sombra a la tarjeta
    React.createElement(
      "div",
      { className: "card-body text-center" }, // Centrar el texto y los botones
      React.createElement(
        "div",
        { className: "d-flex flex-column align-items-center" },
        React.createElement(
          "button",
          {
            className: "btn btn-success w-100 m-2",
            onClick: handleGestionGastos,
          },
          React.createElement(FontAwesomeIcon, { icon: faDollarSign }),
          " Gestionar Gastos Comunes"
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-warning w-100 m-2",
            onClick: handleGestionMultas,
          },
          React.createElement(FontAwesomeIcon, { icon: faFileAlt }),
          " Gestionar Multas"
        ),
        React.createElement(
          "button",
          { className: "btn btn-info w-100 m-2", onClick: handleVerMorosos },
          React.createElement(FontAwesomeIcon, { icon: faUsers }),
          " Ver Morosos"
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-primary w-100 m-2",
            onClick: handleVerificarPagos,
          },
          React.createElement(FontAwesomeIcon, { icon: faClipboardCheck }),
          " Verificar Pagos"
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-danger w-100 m-2",
            onClick: handleModificarMulta,
          },
          React.createElement(FontAwesomeIcon, { icon: faClipboardCheck }),
          " Modificar Multa"
        )
      )
    )
  );
};

export default GestionGastosYMultas;
