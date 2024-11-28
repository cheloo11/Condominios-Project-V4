import React, { useState } from "react";
import Navbar from "../Navbar"; // Importar el componente Navbar
import Footer from "../Footer"; // Importar el componente Footer

const VerMorosidadR = () => {
  const [fecha, setFecha] = useState("");
  const [morosidad, setMorosidad] = useState([]);

  const handleConsultarMorosidad = () => {
    // Lógica para consultar morosidad
    setMorosidad([
      {
        id: 1,
        descripcion: "Gasto común - Agosto",
        monto: "$30,000",
        fecha: "2024-08-10",
      },
      {
        id: 2,
        descripcion: "Gasto común - Septiembre",
        monto: "$30,000",
        fecha: "2024-09-10",
      },
    ]);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "container mt-5" },
      React.createElement("h1", { className: "text-center" }, "Ver Morosidad"),
      React.createElement("input", {
        type: "date",
        value: fecha,
        onChange: (e) => setFecha(e.target.value),
        className: "form-control mb-3",
      }),
      React.createElement(
        "button",
        {
          className: "btn btn-primary mb-4",
          onClick: handleConsultarMorosidad,
        },
        "Consultar Morosidad"
      ),
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "ID"),
            React.createElement("th", null, "Descripción"),
            React.createElement("th", null, "Monto"),
            React.createElement("th", null, "Fecha")
          )
        ),
        React.createElement(
          "tbody",
          null,
          morosidad.map((mora) =>
            React.createElement(
              "tr",
              { key: mora.id },
              React.createElement("td", null, mora.id),
              React.createElement("td", null, mora.descripcion),
              React.createElement("td", null, mora.monto),
              React.createElement("td", null, mora.fecha)
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default VerMorosidadR;
