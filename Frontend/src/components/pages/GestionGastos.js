import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const GestionGastos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    monto: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/gastos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Gasto Común guardado con éxito");
        setFormData({ nombre: "", descripcion: "", monto: "" });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "No se pudo guardar el gasto"}`);
      }
    } catch (error) {
      console.error("Error al guardar el gasto común:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      {
        className: "container mt-5",
        style: { maxWidth: "600px", margin: "auto" },
      },
      React.createElement(
        "div",
        { className: "form-reserva" },
        React.createElement(
          "h2",
          { className: "text-center" },
          "Gestionar Gastos Comunes"
        ),
        React.createElement(
          "form",
          { className: "mt-4", onSubmit: handleSubmit },
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "nombre", className: "form-label" },
              "Nombre del Gasto"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "nombre",
              placeholder: "Ingresa el nombre del gasto",
              value: formData.nombre,
              onChange: handleInputChange,
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "descripcion", className: "form-label" },
              "Descripción del Gasto"
            ),
            React.createElement("textarea", {
              className: "form-control",
              id: "descripcion",
              placeholder: "Ingresa la descripción del gasto",
              value: formData.descripcion,
              onChange: handleInputChange,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "monto", className: "form-label" },
              "Monto del Gasto Común"
            ),
            React.createElement("input", {
              type: "number",
              className: "form-control",
              id: "monto",
              placeholder: "Ingresa el monto",
              value: formData.monto,
              onChange: handleInputChange,
              required: true,
            })
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary w-100" },
            "Guardar Gasto Común"
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default GestionGastos;
