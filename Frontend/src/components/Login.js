import React from "react";
import Navbar from "./Navbar"; // Importar correctamente
import Footer from "./Footer"; // Importar correctamente

const Login = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null), // Renderiza el Navbar

    React.createElement(
      "div",
      { className: "container mt-5 pt-5" }, // Aumenta el margen superior
      React.createElement(
        "div",
        { className: "row justify-content-center" },
        React.createElement(
          "div",
          { className: "col-12 col-sm-8 col-md-4" }, // Ajusta el ancho del formulario
          React.createElement(
            "h2",
            { className: "text-center" },
            "Iniciar Sesión"
          ),

          // Formulario de inicio de sesión
          React.createElement(
            "form",
            {
              className: "mt-10",
              method: "get",
              onSubmit: (e) => redirectDashboard(e), // Llamar la función de redirección al enviar el formulario
            },
            // Campo de correo electrónico
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "email", className: "form-label" },
                "Correo Electrónico"
              ),
              React.createElement("input", {
                type: "email",
                className: "form-control",
                id: "email",
                placeholder: "nombre@ejemplo.com",
                required: true,
              })
            ),
            // Campo de contraseña
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "password", className: "form-label" },
                "Contraseña"
              ),
              React.createElement("input", {
                type: "password",
                className: "form-control",
                id: "password",
                placeholder: "Contraseña",
                required: true,
              })
            ),
            // Selección de rol
            React.createElement(
              "div",
              { className: "mb-3" },
              React.createElement(
                "label",
                { htmlFor: "role", className: "form-label" },
                "Seleccionar Rol"
              ),
              React.createElement(
                "select",
                { className: "form-select", id: "role", required: true },
                React.createElement(
                  "option",
                  { value: "admin" },
                  "Administrador"
                ),
                React.createElement(
                  "option",
                  { value: "conserje" },
                  "Conserje"
                ),
                React.createElement(
                  "option",
                  { value: "directiva" },
                  "Directiva"
                ),
                React.createElement(
                  "option",
                  { value: "residente" },
                  "Residente"
                )
              )
            ),
            // Botón de envío
            React.createElement(
              "button",
              { type: "submit", className: "btn btn-primary w-100 mt-2" },
              "Iniciar Sesión"
            )
          )
        )
      )
    ),

    React.createElement(Footer, null) // Renderiza el pie de página
  );
};

// Función para redirigir según el rol seleccionado
function redirectDashboard(e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  const role = e.target.role.value;
  localStorage.setItem("userRole", role); // Guardar el rol en local storage

  let url = "";
  switch (role) {
    case "admin":
      url = "/admin"; // Ruta para el panel de administración
      break;
    case "conserje":
      url = "/conserje"; // Ruta para el panel de conserje
      break;
    case "directiva":
      url = "/directiva"; // Ruta para el panel de directiva
      break;
    case "residente":
      url = "/residente"; // Ruta para el panel de residente
      break;
    default:
      alert("Rol no válido");
      return;
  }

  // Cambia la URL sin recargar la página
  window.location.href = url; // Redirigir a la URL seleccionada
}

export default Login;
