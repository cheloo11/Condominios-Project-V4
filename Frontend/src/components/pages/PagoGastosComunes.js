import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ConsultarGastosComunes = () => {
  const [gastosComunes, setGastosComunes] = useState([]); // Estado para los gastos comunes

  // Obtener los gastos comunes desde el backend
  useEffect(() => {
    fetch("http://localhost:3000/api/gastos", { method: "GET" }) // URL del backend con método GET
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los gastos comunes");
        }
        return response.json(); // Parsear la respuesta a JSON
      })
      .then((data) => {
        console.log("Datos recibidos:", data); // Verificar que los datos son correctos
        setGastosComunes(data); // Actualizar el estado con los datos de los gastos comunes
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los gastos comunes:", error);
      });
  }, []); // El arreglo vacío asegura que esta solicitud se haga solo una vez cuando el componente se monta

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", null, "Consultar Gastos Comunes"),
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "Nombre"),
            React.createElement("th", null, "Descripción"),
            React.createElement("th", null, "Monto")
          )
        ),
        React.createElement(
          "tbody",
          null,
          gastosComunes.length > 0
            ? gastosComunes.map((gasto, index) =>
                React.createElement(
                  "tr",
                  { key: index },
                  React.createElement("td", null, gasto.nombre),
                  React.createElement("td", null, gasto.descripcion),
                  React.createElement("td", null, `$${gasto.monto}`)
                )
              )
            : React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  { colSpan: 3 },
                  "No hay gastos comunes registrados."
                )
              )
        )
      )
    ),
    React.createElement(Footer)
  );
};

export default ConsultarGastosComunes;
