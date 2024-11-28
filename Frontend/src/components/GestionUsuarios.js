import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSlash,
  faUsersCog,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const GestionUsuarios = () => {
  const handleDeshabilitarUsuario = () => {
    window.location.href = "/deshabilitar-usuario"; // Redirige a la página de deshabilitar usuario
  };

  const handleConsultarResidentes = () => {
    window.location.href = "/consultar-residentes"; // Redirige a la página de consulta de residentes
  };

  const handleIngresarNuevoResidente = () => {
    window.location.href = "/ingresar-nuevo-residente"; // Redirige a la página de ingreso de nuevo residente
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
            className: "btn btn-danger w-100 m-2",
            onClick: handleDeshabilitarUsuario,
          },
          React.createElement(FontAwesomeIcon, { icon: faUserSlash }),
          " Deshabilitar Usuario"
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-info w-100 m-2",
            onClick: handleConsultarResidentes,
          },
          React.createElement(FontAwesomeIcon, { icon: faUsersCog }),
          " Consultar Residentes"
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-success w-100 m-2",
            onClick: handleIngresarNuevoResidente,
          },
          React.createElement(FontAwesomeIcon, { icon: faUserPlus }),
          " Ingresar Nuevo Residente"
        )
      )
    )
  );
};

export default GestionUsuarios;
