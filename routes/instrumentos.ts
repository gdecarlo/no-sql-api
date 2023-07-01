import createGenericRouter from "./genericRouter";
import Instrumento from "../models/instrumento";
import GenericController from "../controllers/genericController";

const controller = new GenericController(Instrumento);

const router = createGenericRouter(controller);
export default router;
