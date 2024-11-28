import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ModificarMulta = () => {
  const [id, setId] = useState(""); // Estado para el ID de la multa
  const [residente, setResidente] = useState(""); // Estado para el nombre del residente
  const [multa, setMulta] = useState(""); // Estado para el monto
  const [razon, setRazon] = useState(""); // Estado para la razón
  const [mesPago, setMesPago] = useState(""); // Estado para el mes de pago

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Datos que se enviarán al backend
    const nuevaMultaData = {
      residenteNombre: residente, // Nombre del residente
      monto: multa, // Nuevo monto
      descripcion: razon, // Razón del cambio
      estado: "pendiente", // Este campo es un ejemplo, ajusta según tu lógica
      mesPago: mesPago, // El mes de pago
    };

    try {
      const response = await fetch(`http://localhost:3000/api/multas/${id}`, {
        method: "PUT", // Asegúrate de que el método sea PUT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaMultaData), // Envía los datos como JSON
      });

      const data = await response.json();
      if (response.ok) {
        alert("Multa modificada exitosamente");
      } else {
        alert(data.mensaje || "Error al modificar la multa");
      }
    } catch (error) {
      console.error("Error al modificar la multa:", error);
      alert("Error al modificar la multa");
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
          "Modificar Multa"
        ),
        React.createElement(
          "form",
          { className: "mt-4", onSubmit: handleSubmit },
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "id", className: "form-label" },
              "ID de la Multa"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "id",
              placeholder: "ID de la multa",
              value: id,
              onChange: (e) => setId(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "residente", className: "form-label" },
              "Nombre del Residente"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "residente",
              placeholder: "Nombre del residente",
              value: residente,
              onChange: (e) => setResidente(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "multa", className: "form-label" },
              "Nuevo Monto"
            ),
            React.createElement("input", {
              type: "number",
              className: "form-control",
              id: "multa",
              placeholder: "Nuevo monto de la multa",
              value: multa,
              onChange: (e) => setMulta(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "razon", className: "form-label" },
              "Razón del Cambio"
            ),
            React.createElement("textarea", {
              className: "form-control",
              id: "razon",
              placeholder: "Razón del cambio de la multa",
              value: razon,
              onChange: (e) => setRazon(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "mesPago", className: "form-label" },
              "Nuevo Mes de Pago"
            ),
            React.createElement("input", {
              type: "month",
              className: "form-control",
              id: "mesPago",
              value: mesPago,
              onChange: (e) => setMesPago(e.target.value),
              required: true,
            })
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary w-100" },
            "Modificar Multa"
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default ModificarMulta;
