import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faConciergeBell,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const AreasComunes = () => {
  const handleReservarAreaComun = () => {
    window.location.href = "/reservar-areas-comunes"; // Redirige a la página de reserva de áreas comunes
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
            className: "btn btn-primary w-100 m-2",
            onClick: handleReservarAreaComun,
          },
          React.createElement(FontAwesomeIcon, { icon: faConciergeBell }),
          " Reservar Área Común"
        )
      )
    )
  );
};

export default AreasComunes;
