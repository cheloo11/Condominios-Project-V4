import React, { useState } from "react";
import Navbar from "../Navbar"; // Importar el componente Navbar
import Footer from "../Footer"; // Importar el componente Footer

const ConsultarPagosPendientes = () => {
  const [userId, setUserId] = useState(""); // Estado para el ID de usuario
  const [resultados, setResultados] = useState([]); // Estado para los pagos obtenidos
  const [error, setError] = useState(null); // Estado para manejar errores

  const handleConsultarPagos = async () => {
    setError(null); // Limpiar errores previos
    try {
      const response = await fetch(
        `http://localhost:3000/api/pagos/usuario/${userId}`
      ); // Llamada a la API con el ID de usuario
      if (!response.ok) {
        throw new Error(
          "Error al consultar pagos. Verifica el ID del usuario."
        );
      }
      const data = await response.json();
      setResultados(data); // Establecer los pagos obtenidos
    } catch (err) {
      setError(err.message); // Manejar errores
      setResultados([]); // Limpiar resultados en caso de error
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
        "Consultar Pagos Pendientes"
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
        { className: "btn btn-primary mb-4", onClick: handleConsultarPagos },
        "Consultar Pagos"
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
            React.createElement("th", null, "Nombre"),
            React.createElement("th", null, "Monto"),
            React.createElement("th", null, "Fecha Pago"),
            React.createElement("th", null, "Método de Pago")
          )
        ),
        React.createElement(
          "tbody",
          null,
          resultados.length === 0
            ? React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { colSpan: 5, className: "text-center" },
                  "No se encontraron pagos para este usuario."
                )
              )
            : resultados.map((pago) =>
                React.createElement(
                  "tr",
                  { key: pago._id },
                  React.createElement("td", null, pago._id),
                  React.createElement("td", null, pago.nombre),
                  React.createElement("td", null, `$${pago.monto}`),
                  React.createElement(
                    "td",
                    null,
                    new Date(pago.fechaPago).toLocaleDateString()
                  ),
                  React.createElement("td", null, pago.metodoPago)
                )
              )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default ConsultarPagosPendientes;
