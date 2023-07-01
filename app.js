const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const personasRouter = require("./routes/personas");

const app = express();

// Configuración de la conexión a MongoDB con Mongoose
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.renekck.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", function () {
  console.log("Conexión exitosa a la base de datos MongoDB");
});

// Middleware para procesar datos JSON en las solicitudes
app.use(express.json());

// Rutas para las personas
app.use("/personas", personasRouter);

// Resto de tu configuración de Express y rutas
// ...

// Inicia el servidor
app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});
