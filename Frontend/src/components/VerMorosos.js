import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faFileAlt,
  faUsers,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

const VerMorosos = () => {
  const handleVerMorosos = () => {
    window.location.href = "/ver-morosos"; // Redirige a la página de ver morosos
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
          { className: "btn btn-info w-100 m-2", onClick: handleVerMorosos },
          React.createElement(FontAwesomeIcon, { icon: faUsers }),
          " Ver Morosos"
        )
      )
    )
  );
};

export default VerMorosos;
