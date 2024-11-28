import React, { useState } from "react";
import Navbar from "../Navbar"; // Asegúrate de que este componente exista
import Footer from "../Footer"; // Asegúrate de que este componente exista

const RegistrarPago = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    monto: "",
    tipo: "gasto_comun", // Valor predeterminado
    fechaPago: "",
    metodoPago: "manual", // Valor predeterminado
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realizar la petición POST para registrar el pago
    try {
      const response = await fetch("http://localhost:3000/api/pagos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Pago registrado con éxito");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error al registrar el pago:", error);
      alert("Error al registrar el pago.");
    }
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null), // Navegación
    React.createElement(
      "div",
      {
        className: "container mt-5",
        style: { maxWidth: "600px", margin: "auto" },
      },
      React.createElement(
        "div",
        { className: "form-pago" },
        React.createElement(
          "h2",
          { className: "text-center" },
          "Registrar Pago"
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
              "Nombre del Residente"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "nombre",
              name: "nombre",
              value: formData.nombre,
              onChange: handleChange,
              placeholder: "Nombre del residente",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "monto", className: "form-label" },
              "Monto"
            ),
            React.createElement("input", {
              type: "number",
              className: "form-control",
              id: "monto",
              name: "monto",
              value: formData.monto,
              onChange: handleChange,
              placeholder: "Monto del pago",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "tipo", className: "form-label" },
              "Tipo de Pago"
            ),
            React.createElement(
              "select",
              {
                className: "form-select",
                id: "tipo",
                name: "tipo",
                value: formData.tipo,
                onChange: handleChange,
                required: true,
              },
              React.createElement(
                "option",
                { value: "gasto_comun" },
                "Gasto Común"
              ),
              React.createElement("option", { value: "multa" }, "Multa"),
              React.createElement(
                "option",
                { value: "mantenimiento" },
                "Mantenimiento"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "fechaPago", className: "form-label" },
              "Fecha de Pago"
            ),
            React.createElement("input", {
              type: "date",
              className: "form-control",
              id: "fechaPago",
              name: "fechaPago",
              value: formData.fechaPago,
              onChange: handleChange,
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "metodoPago", className: "form-label" },
              "Método de Pago"
            ),
            React.createElement(
              "select",
              {
                className: "form-select",
                id: "metodoPago",
                name: "metodoPago",
                value: formData.metodoPago,
                onChange: handleChange,
                required: true,
              },
              React.createElement("option", { value: "manual" }, "Manual"),
              React.createElement("option", { value: "khipu" }, "Khipu"),
              React.createElement("option", { value: "webpay" }, "Webpay")
            )
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary w-100" },
            "Registrar Pago"
          )
        )
      )
    ),
    React.createElement(Footer, null) // Pie de página
  );
};

export default RegistrarPago;
