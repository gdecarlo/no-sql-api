import express, { Router } from "express";
import GenericController from "../controllers/genericController";

export default function createGenericRouter<T>(
  controller: GenericController<T>
): Router {
  const router = express.Router();

  router.get("/", controller.getAllEntities);
  router.get("/:id", controller.getEntityById);
  router.post("/", controller.createEntity);
  router.put("/:id", controller.updateEntity);
  router.delete("/:id", controller.deleteEntity);

  return router;
}
