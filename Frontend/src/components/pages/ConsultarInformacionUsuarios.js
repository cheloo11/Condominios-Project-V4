import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSlash,
  faUsersCog,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const ConsultarInformacionUsuarios = () => {
  const handleConsultarResidentes = () => {
    window.location.href = "/consultar-residentes"; // Redirige a la página de consulta de residentes
  };

  const handleConsultarMultas = () => {
    window.location.href = "/consultar-multas"; // Redirige a la página de consulta de multas
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
            className: "btn btn-info w-100 m-2",
            onClick: handleConsultarResidentes,
          },
          React.createElement(FontAwesomeIcon, { icon: faUsersCog }),
          " Consultar Residentes"
        )
      )
    )
  );
};

export default ConsultarInformacionUsuarios;
