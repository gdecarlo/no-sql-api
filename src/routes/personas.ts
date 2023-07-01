import createGenericRouter from "./genericRouter";
import { Model } from "mongoose";
import Persona from "../models/persona";
import GenericController from "../controllers/genericController";
import { IEntity } from "../models/interfaces/IEntity";
import { GenericService } from "../services/genericService";
import { GenericRepository } from "../repositories/genericRepository";

const repository = new GenericRepository<IEntity>(Persona as Model<IEntity>);
const service = new GenericService<IEntity>(repository);
const controller = new GenericController<IEntity>(service);

const router = createGenericRouter(controller);
export default router;
