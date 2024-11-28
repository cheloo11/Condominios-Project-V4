import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ConsultarMultasR = () => {
  const [userId, setUserId] = useState(""); // Estado para almacenar el ID del usuario
  const [multas, setMultas] = useState([]); // Estado para almacenar las multas
  const [error, setError] = useState(null); // Estado para manejar errores

  const handleConsultarMultas = async () => {
    try {
      setError(null); // Limpiar errores previos
      const response = await fetch(
        `http://localhost:3000/api/multas/usuario/${userId}` // Ruta actualizada
      ); // Llamada a la API
      if (!response.ok) {
        throw new Error(
          "Error al consultar multas. Verifica el ID del usuario."
        );
      }
      const data = await response.json();
      setMultas(data); // Establecer las multas obtenidas
    } catch (err) {
      setError(err.message); // Manejar errores
      setMultas([]); // Limpiar multas en caso de error
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "container mt-5" },
      React.createElement(
        "h1",
        { className: "text-center" },
        "Consultar Multas por Usuario"
      ),
      React.createElement(
        "div",
        { className: "mb-3" },
        React.createElement(
          "label",
          { htmlFor: "userId", className: "form-label" },
          "ID del Usuario"
        ),
        React.createElement("input", {
          type: "text",
          id: "userId",
          value: userId,
          onChange: (e) => setUserId(e.target.value),
          className: "form-control",
          placeholder: "Ingrese el ID del usuario",
        })
      ),
      React.createElement(
        "button",
        { className: "btn btn-primary mb-4", onClick: handleConsultarMultas },
        "Consultar Multas"
      ),
      error &&
        React.createElement("div", { className: "alert alert-danger" }, error),
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "ID"),
            React.createElement("th", null, "Descripción"),
            React.createElement("th", null, "Monto"),
            React.createElement("th", null, "Estado")
          )
        ),
        React.createElement(
          "tbody",
          null,
          multas.length === 0
            ? React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { colSpan: 5, className: "text-center" },
                  "No se encontraron multas para este usuario."
                )
              )
            : multas.map((multa) =>
                React.createElement(
                  "tr",
                  { key: multa._id },
                  React.createElement("td", null, multa._id),
                  React.createElement("td", null, multa.descripcion),
                  React.createElement("td", null, `$${multa.monto}`),
                  React.createElement("td", null, multa.estado)
                )
              )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default ConsultarMultasR;
