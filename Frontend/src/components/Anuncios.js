import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const Anuncios = () => {
  const handleCrearAnuncio = () => {
    window.location.href = "/crear-anuncios"; // Redirige a la página de creación de anuncios
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
            onClick: handleCrearAnuncio,
          },
          React.createElement(FontAwesomeIcon, { icon: faBullhorn }),
          " Crear Anuncio"
        )
      )
    )
  );
};

export default Anuncios;
