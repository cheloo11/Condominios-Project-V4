import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar Link y useNavigate de React Router

const Navbar = () => {
  const navigate = useNavigate(); // Hook para redirigir programáticamente

  const handleHomeClick = () => {
    const role = localStorage.getItem("userRole"); // Obtener el rol del local storage
    if (role) {
      switch (role) {
        case "admin":
          navigate("/admin"); // Redirigir al panel de administración
          break;
        case "conserje":
          navigate("/conserje"); // Redirigir al panel de conserje
          break;
        case "directiva":
          navigate("/directiva"); // Redirigir al panel de directiva
          break;
        case "residente":
          navigate("/residente"); // Redirigir al panel de residente
          break;
        default:
          alert("Rol no válido");
      }
    } else {
      alert("No se ha encontrado el rol del usuario.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Condominio
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={handleHomeClick}
              >
                Inicio
              </button>{" "}
              {/* Botón de Inicio */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
