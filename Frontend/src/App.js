import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import PanelAdministracion from "./components/PanelAdministracion";
import ReservarAreasComunes from "./components/pages/ReservarAreasComunes";
import CrearAnuncios from "./components/pages/CrearAnuncios";
import GestionGastos from "./components/pages/GestionGastos";
import GestionMultas from "./components/pages/GestionMultas";
import VerMorosos from "./components/pages/VerMorosos";
import VerificarPagos from "./components/pages/VerificarPagos";
import ModificarMulta from "./components/pages/ModificarMulta";
import DeshabilitarUsuario from "./components/pages/DeshabilitarUsuario";
import ConsultarResidentes from "./components/pages/ConsultarResidentes";
import IngresarNuevoResidente from "./components/pages/IngresarNuevoResidente";
import PanelConserje from "./components/PanelConserje";
import PagoGastosComunes from "./components/pages/PagoGastosComunes";
import PagoMultas from "./components/pages/PagoMultas";
import PanelDirectiva from "./components/PanelDirectiva";
import PanelResidente from "./components/PanelResidente";
import ConsultarPagosPendientesR from "./components/pages/ConsultarPagosPendientesR"; // Importar componente de pagos pendientes
import ConsultarMultasRR from "./components/pages/ConsultarMultasRR"; // Importar componente de consultas de multas
import VerMorosidadRR from "./components/pages/VerMorosidadRR"; // Importar componente de ver morosidad
import RegistrarPago from "./components/pages/RegistrarPago"; // Importar componente de registrar pago

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      // Ruta principal, Login
      React.createElement(Route, {
        path: "/",
        element: React.createElement(Login),
      }),
      // Ruta para el panel de conserje
      React.createElement(Route, {
        path: "/conserje",
        element: React.createElement(PanelConserje),
      }),
      // Ruta para el Panel de Administración
      React.createElement(Route, {
        path: "/admin",
        element: React.createElement(PanelAdministracion),
      }),
      // Rutas para las funcionalidades dentro del panel de administración
      React.createElement(Route, {
        path: "/reservar-areas-comunes",
        element: React.createElement(ReservarAreasComunes),
      }),
      React.createElement(Route, {
        path: "/crear-anuncios",
        element: React.createElement(CrearAnuncios),
      }),
      React.createElement(Route, {
        path: "/gestion-gastos",
        element: React.createElement(GestionGastos),
      }),
      React.createElement(Route, {
        path: "/gestion-multas",
        element: React.createElement(GestionMultas),
      }),
      React.createElement(Route, {
        path: "/ver-morosos",
        element: React.createElement(VerMorosos),
      }),
      React.createElement(Route, {
        path: "/verificar-pagos",
        element: React.createElement(VerificarPagos),
      }),
      React.createElement(Route, {
        path: "/modificar-multa",
        element: React.createElement(ModificarMulta),
      }),
      React.createElement(Route, {
        path: "/deshabilitar-usuario",
        element: React.createElement(DeshabilitarUsuario),
      }),
      React.createElement(Route, {
        path: "/consultar-residentes",
        element: React.createElement(ConsultarResidentes),
      }),
      React.createElement(Route, {
        path: "/ingresar-nuevo-residente",
        element: React.createElement(IngresarNuevoResidente),
      }),
      React.createElement(Route, {
        path: "/consultar-pago-gastos-comunes",
        element: React.createElement(PagoGastosComunes),
      }),
      React.createElement(Route, {
        path: "/consultar-pago-multas",
        element: React.createElement(PagoMultas),
      }),
      // Ruta para el panel de directiva
      React.createElement(Route, {
        path: "/directiva",
        element: React.createElement(PanelDirectiva),
      }),
      // Ruta para el panel de residente
      React.createElement(Route, {
        path: "/residente",
        element: React.createElement(PanelResidente),
      }),
      React.createElement(Route, {
        path: "/consultar-pagos-pendientes",
        element: React.createElement(ConsultarPagosPendientesR),
      }),
      React.createElement(Route, {
        path: "/consultar-multas",
        element: React.createElement(ConsultarMultasRR),
      }),
      React.createElement(Route, {
        path: "/registrar-pago",
        element: React.createElement(RegistrarPago),
      }),
      React.createElement(Route, {
        path: "/ver-morosidad",
        element: React.createElement(VerMorosidadRR),
      })
    )
  );
};

export default App;
