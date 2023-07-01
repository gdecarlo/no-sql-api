const express = require("express");
const router = require("./genericRouter");
const Persona = require("../models/persona");
const PersonaController = require("../controllers/genericController");

const personaController = new PersonaController(Persona);

module.exports = router(personaController);
