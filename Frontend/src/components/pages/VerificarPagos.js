import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const VerificarPagos = () => {
  const residentes = [
    { nombre: "Juan Pérez", pagado: true },
    { nombre: "María López", pagado: false },
    { nombre: "Carlos García", pagado: true },
    { nombre: "Ana Martínez", pagado: false },
    { nombre: "Luis Rodríguez", pagado: true },
    { nombre: "Sofía Hernández", pagado: false },
    { nombre: "Miguel Torres", pagado: true },
    { nombre: "Lucía Sánchez", pagado: false },
    { nombre: "Jorge Ramírez", pagado: true },
    { nombre: "Elena Díaz", pagado: false },
  ];

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
        "Verificar Pagos de Residentes"
      ),
      React.createElement(
        "ul",
        { className: "list-group mt-4" },
        residentes.map((residente, index) =>
          React.createElement(
            "li",
            {
              key: index,
              className:
                "list-group-item d-flex justify-content-between align-items-center",
            },
            residente.nombre,
            React.createElement(
              "span",
              {
                className: `badge ${
                  residente.pagado ? "bg-success" : "bg-danger"
                }`,
              },
              residente.pagado ? "Pagado" : "No Pagado"
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default VerificarPagos;
