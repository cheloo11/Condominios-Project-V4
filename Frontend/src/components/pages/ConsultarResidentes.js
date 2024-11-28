import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ConsultarResidentes = () => {
  const [residentes, setResidentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResidentes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/usuarios");
        const data = await response.json();

        if (response.ok) {
          // Filtrar solo los residentes activos
          const residentesActivos = data.filter(
            (usuario) => usuario.rol === "residente" && !usuario.deshabilitado
          );
          setResidentes(residentesActivos);
        } else {
          throw new Error(data.error || "Error al cargar los residentes.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResidentes();
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      {
        className: "container mt-5",
        style: { maxWidth: "400px", margin: "auto" },
      },
      React.createElement(
        "h2",
        { className: "text-center" },
        "Consultar Residentes"
      ),
      loading
        ? React.createElement(
            "p",
            { className: "text-center mt-4" },
            "Cargando..."
          )
        : error
        ? React.createElement(
            "p",
            { className: "text-center text-danger mt-4" },
            error
          )
        : React.createElement(
            "div",
            { style: { overflowX: "auto" } },
            React.createElement(
              "table",
              {
                className: "table table-striped",
                style: { margin: "auto", width: "100%", maxWidth: "350px" },
              },
              React.createElement(
                "thead",
                null,
                React.createElement(
                  "tr",
                  null,
                  React.createElement(
                    "th",
                    { className: "text-center" },
                    "Nombre"
                  )
                )
              ),
              React.createElement(
                "tbody",
                null,
                residentes.map((residente) =>
                  React.createElement(
                    "tr",
                    { key: residente._id },
                    React.createElement(
                      "td",
                      { className: "text-center" },
                      residente.nombre
                    )
                  )
                )
              )
            )
          )
    ),
    React.createElement(Footer, null)
  );
};

export default ConsultarResidentes;
