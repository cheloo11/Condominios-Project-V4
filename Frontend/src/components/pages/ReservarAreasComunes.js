import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../assets/css/styles.css"; // Asegúrate de que la ruta sea correcta
import quinchoImage from "../../assets/images/quincho.jpg";
import salaEventosImage from "../../assets/images/sala_eventos.jpg";
import multicanchaImage from "../../assets/images/multicancha.jpg";

const ReservarAreasComunes = () => {
  const [formData, setFormData] = useState({
    area: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
    estacionamiento: "", // Nuevo estado para el estacionamiento específico
  });

  const [reservas, setReservas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getImageForArea = (area) => {
    switch (area) {
      case "Quincho":
        return quinchoImage;
      case "Sala de Eventos":
        return salaEventosImage;
      case "Multicancha":
        return multicanchaImage;
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { area, fecha, horaInicio, horaFin, estacionamiento } = formData;

    // Verifica que todos los campos requeridos estén llenos
    if (area && fecha && horaInicio && horaFin) {
      const nuevaReserva = {
        area,
        fechaReserva: fecha,
        horaInicio,
        horaFin,
        estacionamiento: area === "Estacionamiento" ? estacionamiento : "", // Si es estacionamiento, incluir la opción seleccionada
      };

      try {
        const response = await fetch("http://localhost:3000/api/reservas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaReserva),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Reserva creada correctamente", data);
          setReservas([...reservas, data]); // Añadir la nueva reserva a las reservas mostradas
          setFormData({
            area: "",
            fecha: "",
            horaInicio: "",
            horaFin: "",
            estacionamiento: "",
          }); // Limpiar formulario
        } else {
          console.error(
            "Error al crear la reserva:",
            data.mensaje || data.error
          );
        }
      } catch (error) {
        console.error("Error al crear la reserva:", error);
      }
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
          "Reservar Áreas Comunes"
        ),
        React.createElement(
          "form",
          { onSubmit: handleSubmit, className: "mt-4" },
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("label", null, "Área:"),
            React.createElement(
              "select",
              {
                name: "area",
                value: formData.area,
                onChange: handleChange,
                required: true,
                className: "form-control",
              },
              React.createElement(
                "option",
                { value: "" },
                "Seleccione un área"
              ),
              React.createElement("option", { value: "Quincho" }, "Quincho"),
              React.createElement(
                "option",
                { value: "Multicancha" },
                "Multicancha"
              ),
              React.createElement(
                "option",
                { value: "Estacionamiento" },
                "Estacionamiento"
              ),
              React.createElement(
                "option",
                { value: "Sala de Eventos" },
                "Sala de Eventos"
              )
            )
          ),
          formData.area &&
            formData.area !== "Estacionamiento" &&
            React.createElement(
              "div",
              { className: "form-group text-center" },
              React.createElement("img", {
                src: getImageForArea(formData.area),
                alt: formData.area,
                className: "img-fluid area-image",
              })
            ),
          formData.area === "Estacionamiento" &&
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", null, "Estacionamiento Específico:"),
              React.createElement(
                "select",
                {
                  name: "estacionamiento",
                  value: formData.estacionamiento,
                  onChange: handleChange,
                  required: true,
                  className: "form-control",
                },
                React.createElement(
                  "option",
                  { value: "" },
                  "Seleccione un estacionamiento"
                ),
                React.createElement(
                  "option",
                  { value: "Estacionamiento Visitas 1" },
                  "Estacionamiento Visitas 1"
                ),
                React.createElement(
                  "option",
                  { value: "Estacionamiento Visitas 2" },
                  "Estacionamiento Visitas 2"
                ),
                React.createElement(
                  "option",
                  { value: "Estacionamiento Visitas 3" },
                  "Estacionamiento Visitas 3"
                ),
                React.createElement(
                  "option",
                  { value: "Estacionamiento Visitas 4" },
                  "Estacionamiento Visitas 4"
                )
              )
            ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("label", null, "Fecha:"),
            React.createElement("input", {
              type: "date",
              name: "fecha",
              value: formData.fecha,
              onChange: handleChange,
              required: true,
              className: "form-control",
            })
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("label", null, "Hora de Inicio:"),
            React.createElement("input", {
              type: "time",
              name: "horaInicio",
              value: formData.horaInicio,
              onChange: handleChange,
              required: true,
              className: "form-control",
            })
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("label", null, "Hora de Fin:"),
            React.createElement("input", {
              type: "time",
              name: "horaFin",
              value: formData.horaFin,
              onChange: handleChange,
              required: true,
              className: "form-control",
            })
          ),
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-primary mt-3" },
            "Reservar"
          )
        ),
        React.createElement("h3", { className: "mt-5" }, "Reservas Realizadas"),
        React.createElement(
          "ul",
          { className: "list-group" },
          reservas.map((reserva, index) =>
            React.createElement(
              "li",
              { key: index, className: "list-group-item" },
              `${reserva.area} - ${reserva.fechaReserva} de ${reserva.horaInicio} a ${reserva.horaFin}` +
                (reserva.area === "Estacionamiento"
                  ? ` en ${reserva.estacionamiento}`
                  : "")
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
};

export default ReservarAreasComunes;
