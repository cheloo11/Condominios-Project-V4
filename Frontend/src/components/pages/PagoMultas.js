import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ConsultarMultas = () => {
  const [multas, setMultas] = useState([]); // Estado para almacenar las multas
  const [error, setError] = useState(null); // Estado para manejar errores

  // Llamada a la API para obtener las multas
  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/multas"); // Cambiar la URL según la ruta de la API
        if (!response.ok) {
          throw new Error("No se pudieron obtener las multas.");
        }
        const data = await response.json();
        setMultas(data); // Establecer las multas obtenidas
      } catch (error) {
        setError(error.message); // Manejar errores
      }
    };

    fetchMultas(); // Llamada a la función fetchMultas
  }, []); // Se ejecuta solo una vez al cargar el componente

  // Si hay un error, lo mostramos
  if (error) {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", null, "Error al cargar las multas"),
      React.createElement("p", null, error)
    );
  }

  // Si no hay multas, mostramos el mensaje correspondiente
  if (multas.length === 0) {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", null, "Consultar Multas"),
      React.createElement("p", null, "No hay multas registradas.")
    );
  }

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", null, "Consultar Multas"),
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "Nombre del Residente"),
            React.createElement("th", null, "Descripción"),
            React.createElement("th", null, "Monto"),
            React.createElement("th", null, "Estado")
          )
        ),
        React.createElement(
          "tbody",
          null,
          multas.map((multa, index) =>
            React.createElement(
              "tr",
              { key: index },
              React.createElement("td", null, multa.residenteNombre), // Aquí debe ser el campo correcto
              React.createElement("td", null, multa.descripcion),
              React.createElement("td", null, `$${multa.monto}`), // Formato de monto
              React.createElement("td", null, multa.estado)
            )
          )
        )
      )
    ),
    React.createElement(Footer)
  );
};

export default ConsultarMultas;
