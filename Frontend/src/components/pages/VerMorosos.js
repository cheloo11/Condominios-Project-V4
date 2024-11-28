import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const VerMorosos = () => {
  const residentes = [
    { nombre: "Juan Pérez", deuda: "$500.000" },
    { nombre: "María López", deuda: "$350.000" },
    { nombre: "Carlos García", deuda: "$200.000" },
    { nombre: "Ana Martínez", deuda: "$450.000" },
    { nombre: "Luis Rodríguez", deuda: "$300.000" },
    { nombre: "Sofía Hernández", deuda: "$600.000" },
    { nombre: "Miguel Torres", deuda: "$250.000" },
    { nombre: "Lucía Sánchez", deuda: "$400.000" },
    { nombre: "Jorge Ramírez", deuda: "$550.000" },
    { nombre: "Elena Díaz", deuda: "$150.000" },
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
        "Lista de Residentes Morosos"
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
              { className: "badge bg-danger" },
              `Deuda: ${residente.deuda}`
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default VerMorosos;
