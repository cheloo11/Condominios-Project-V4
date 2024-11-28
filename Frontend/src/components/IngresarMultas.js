import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faFileAlt,
  faUsers,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const GestionGastosYMultas = () => {
  const handleGestionMultas = () => {
    window.location.href = "/gestion-multas"; // Redirige a la página de gestión de multas
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
            className: "btn btn-warning w-100 m-2",
            onClick: handleGestionMultas,
          },
          React.createElement(FontAwesomeIcon, { icon: faFileAlt }),
          " Gestionar Multas"
        )
      )
    )
  );
};

export default GestionGastosYMultas;
