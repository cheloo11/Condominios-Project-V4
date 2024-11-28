import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate

const ConsultarMultasR = () => {
  const navigate = useNavigate(); // Inicializar el hook

  const handleConsultarMultas = () => {
    navigate("/consultar-multas"); // Redirigir a la página correspondiente
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
            className: "btn btn-danger w-100 m-2",
            onClick: handleConsultarMultas,
          },
          React.createElement(FontAwesomeIcon, { icon: faExclamationTriangle }),
          " Consultar Multas "
        )
      )
    )
  );
};

export default ConsultarMultasR;
