class GenericController {
  constructor(Entity) {
    this.Entity = Entity;
  }

  getAllEntities = async (req, res) => {
    try {
      const entities = await this.Entity.find();
      res.json(entities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getEntityById = async (req, res) => {
    try {
      const entity = await this.Entity.findById(req.params.id);
      res.json(entity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createEntity = async (req, res) => {
    try {
      const entity = new this.Entity(req.body);
      await entity.save();
      res.status(201).json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  updateEntity = async (req, res) => {
    try {
      const entity = await this.Entity.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteEntity = async (req, res) => {
    try {
      const entity = await this.Entity.findByIdAndRemove(req.params.id);
      res.json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = GenericController;
