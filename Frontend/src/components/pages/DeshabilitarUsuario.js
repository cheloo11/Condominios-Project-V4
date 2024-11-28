import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DeshabilitarUsuario = () => {
  const [formData, setFormData] = useState({
    userId: "",
    motivo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userId, motivo } = formData;

    if (!userId) {
      alert("Por favor, proporciona el ID del usuario.");
      return;
    }

    // Mostrar el motivo en el frontend (opcional)
    console.log(`Motivo proporcionado: ${motivo}`);

    try {
      // Realizar solicitud DELETE al backend
      const response = await fetch(
        `http://localhost:3000/api/usuarios/${userId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Usuario deshabilitado exitosamente");
        setFormData({ userId: "", motivo: "" }); // Limpiar el formulario
      } else {
        alert(data.error || "Hubo un problema al deshabilitar el usuario.");
      }
    } catch (error) {
      console.error("Error al deshabilitar el usuario:", error);
      alert("Hubo un error al conectar con el servidor.");
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
          "Deshabilitar Usuario"
        ),
        React.createElement(
          "form",
          { className: "mt-4", onSubmit: handleSubmit },
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
              className: "form-control",
              id: "userId",
              value: formData.userId,
              onChange: handleChange,
              placeholder: "ID del usuario",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "motivo", className: "form-label" },
              "Motivo de Deshabilitación"
            ),
            React.createElement("textarea", {
              className: "form-control",
              id: "motivo",
              value: formData.motivo,
              onChange: handleChange,
              placeholder:
                "Motivo de deshabilitación (solo para referencia interna)",
            })
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-danger w-100" },
            "Deshabilitar Usuario"
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default DeshabilitarUsuario;
