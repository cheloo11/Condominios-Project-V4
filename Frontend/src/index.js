import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importamos el archivo App donde están las rutas
import "./assets/css/styles.css"; // Importamos los estilos CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null)); // Renderizamos el componente App
