import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const IngresarNuevoResidente = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "", // Esto será el email en el backend
    contrasena: "",
    rol: "residente", // Valor predeterminado
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre, usuario, contrasena, rol } = formData;

    // Validar que todos los campos estén llenos
    if (!nombre || !usuario || !contrasena || !rol) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    try {
      // Enviar la solicitud POST al backend
      const response = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email: usuario, // El "usuario" se utiliza como email
          password: contrasena,
          rol,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuario creado exitosamente");
        setFormData({
          nombre: "",
          usuario: "",
          contrasena: "",
          rol: "residente",
        });
      } else {
        alert(data.error || "Hubo un problema al crear el usuario.");
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
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
          "Ingresar Nuevo Usuario"
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
              "Nombre del Usuario"
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control",
              id: "nombre",
              value: formData.nombre,
              onChange: handleChange,
              placeholder: "Nombre",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "usuario", className: "form-label" },
              "Email"
            ),
            React.createElement("input", {
              type: "email",
              className: "form-control",
              id: "usuario",
              value: formData.usuario,
              onChange: handleChange,
              placeholder: "correo@gmail.com",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "contrasena", className: "form-label" },
              "Contraseña"
            ),
            React.createElement("input", {
              type: "password",
              className: "form-control",
              id: "contrasena",
              value: formData.contrasena,
              onChange: handleChange,
              placeholder: "Contraseña",
              required: true,
            })
          ),
          React.createElement(
            "div",
            { className: "mb-3" },
            React.createElement(
              "label",
              { htmlFor: "rol", className: "form-label" },
              "Rol"
            ),
            React.createElement(
              "select",
              {
                className: "form-control",
                id: "rol",
                value: formData.rol,
                onChange: handleChange,
                required: true,
              },
              React.createElement(
                "option",
                { value: "residente" },
                "Residente"
              ),
              React.createElement(
                "option",
                { value: "admin" },
                "Administrador"
              ),
              React.createElement(
                "option",
                { value: "directiva" },
                "Directiva"
              ),
              React.createElement("option", { value: "conserje" }, "Conserje")
            )
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-success w-100" },
            "Agregar Usuario"
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default IngresarNuevoResidente;
