const Persona = require("../models/persona");

class PersonaController {
  async getAllPersonas(req, res) {
    try {
      const personas = await Persona.find();
      res.json(personas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPersonaById(req, res) {
    try {
      const persona = await Persona.findById(req.params.id);
      res.json(persona);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPersona(req, res) {
    try {
      const persona = new Persona(req.body);
      await persona.save();
      res.status(201).json(persona);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updatePersona(req, res) {
    try {
      const persona = await Persona.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(persona);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deletePersona(req, res) {
    try {
      const persona = await Persona.findByIdAndRemove(req.params.id);
      res.json(persona);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new PersonaController();
