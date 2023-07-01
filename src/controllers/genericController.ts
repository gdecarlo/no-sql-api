import { Request, Response } from "express";
import { Document } from "mongoose";
import { IEntityService } from "../services/IEntityService";

export default class GenericController<T extends Document> {
  constructor(private entityService: IEntityService<T>) {}

  getAllEntities = async (req: Request, res: Response) => {
    try {
      const entities = await this.entityService.findAll();
      res.json(entities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getEntityById = async (req: Request, res: Response) => {
    try {
      const entity = await this.entityService.findById(req.params.id);
      res.json(entity);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  createEntity = async (req: Request, res: Response) => {
    try {
      const entity = await this.entityService.create(req.body);
      res.status(201).json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  updateEntity = async (req: Request, res: Response) => {
    try {
      const entity = await this.entityService.updateById(
        req.params.id,
        req.body
      );
      res.json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteEntity = async (req: Request, res: Response) => {
    try {
      const entity = await this.entityService.deleteById(req.params.id);
      res.json(entity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}
