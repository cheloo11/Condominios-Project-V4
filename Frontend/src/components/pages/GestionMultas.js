import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const GestionMultas = () => {
  const [residenteNombre, setResidenteNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [estado, setEstado] = useState("pendiente");
  const [usuarioId, setUsuarioId] = useState(""); // Estado para almacenar el ID del usuario

  const handleSubmit = async (event) => {
    event.preventDefault();

    const multaData = {
      residenteNombre,
      descripcion,
      monto,
      estado,
      usuarioId, // Agregar el ID del usuario al objeto de datos
    };

    try {
      const response = await fetch("http://localhost:3000/api/multas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(multaData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Multa registrada exitosamente");
      } else {
        alert(data.mensaje || "Error al registrar la multa");
      }
    } catch (error) {
      console.error("Error al enviar la multa:", error);
      alert("Error al registrar la multa");
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
          "Gestionar Multas"
        ),
        React.createElement(
          "form",
          { className: "mt-4", onSubmit: handleSubmit },
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "residenteNombre", className: "form-label" },
              "Nombre del Residente"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "residenteNombre",
              placeholder: "Nombre del residente",
              value: residenteNombre,
              onChange: (e) => setResidenteNombre(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "descripcion", className: "form-label" },
              "Descripción de la Multa"
            ),
            React.createElement("textarea", {
              className: "form-control",
              id: "descripcion",
              placeholder: "Descripción...",
              value: descripcion,
              onChange: (e) => setDescripcion(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "monto", className: "form-label" },
              "Monto de la Multa"
            ),
            React.createElement("input", {
              type: "number",
              className: "form-control",
              id: "monto",
              placeholder: "Monto",
              value: monto,
              onChange: (e) => setMonto(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "estado", className: "form-label" },
              "Estado de la Multa"
            ),
            React.createElement(
              "select",
              {
                className: "form-control",
                id: "estado",
                value: estado,
                onChange: (e) => setEstado(e.target.value),
              },
              React.createElement(
                "option",
                { value: "pendiente" },
                "Pendiente"
              ),
              React.createElement("option", { value: "pagada" }, "Pagada")
            )
          ),
          // Nuevo campo para el ID de Usuario
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "usuarioId", className: "form-label" },
              "ID del Usuario"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "usuarioId",
              placeholder: "ID del usuario",
              value: usuarioId,
              onChange: (e) => setUsuarioId(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary w-100" },
            "Registrar Multa"
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default GestionMultas;
