import express, { Application } from "express";
import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
import personasRouter from "./routes/personas";
import instrumentosRouter from "./routes/instrumentos";

dotenv.config();

const PORT = process.env.PORT || 3030;

const app: Application = express();

// Configuración de la conexión a MongoDB con Mongoose
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.renekck.mongodb.net/?retryWrites=true&w=majority`,
  {}
);

const db: Connection = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", function () {
  console.log("Conexión exitosa a la base de datos MongoDB");
});

// Middleware para procesar datos JSON en las solicitudes
app.use(express.json());

// Rutas para las personas
app.use("/personas", personasRouter);
app.use("/instrumentos", instrumentosRouter);

// Resto de tu configuración de Express y rutas
// ...

// Inicia el servidor
app.listen(PORT, function () {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
