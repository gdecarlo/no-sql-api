import createGenericRouter from "./genericRouter";
import Persona from "../models/persona";
import GenericController from "../controllers/genericController";

const controller = new GenericController(Persona);

const router = createGenericRouter(controller);
export default router;
