require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", require("./routes/usuarioRoutes"));
app.use("/api/gastos", require("./routes/gastosRoutes"));
app.use("/api/multas", require("./routes/multasRoutes"));
app.use("/api/reservas", require("./routes/reservasRoutes"));
app.use("/api/anuncios", require("./routes/anunciosRoutes"));
app.use("/api/condominios", require("./routes/condominioRoutes"));
app.use("/api/viviendas", require("./routes/viviendaRoutes"));
app.use("/api/pagos", require("./routes/pagoRoutes"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
