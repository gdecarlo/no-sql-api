const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
  nombre: String,
});

const Persona = mongoose.model("Persona", personaSchema);

module.exports = Persona;
