import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate

const ConsultarPagosPendientes = () => {
  const navigate = useNavigate(); // Inicializar el hook

  const handleConsultarPagos = () => {
    navigate("/consultar-pagos-pendientes"); // Redirigir a la página correspondiente
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
            onClick: handleConsultarPagos,
          },
          React.createElement(FontAwesomeIcon, { icon: faMoneyBillWave }),
          " Consultar Pagos "
        )
      )
    )
  );
};

export default ConsultarPagosPendientes;
