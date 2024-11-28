import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const PagarGastoComun = () => {
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const handlePagarGastoComun = () => {
    // Redirigir a la página de registrar pago
    navigate("/registrar-pago");
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
            onClick: handlePagarGastoComun,
          },
          React.createElement(FontAwesomeIcon, { icon: faCreditCard }),
          " Pagar"
        )
      )
    )
  );
};

export default PagarGastoComun;
