import express, { Router } from "express";
import GenericController from "../controllers/genericController";
import { Document } from "mongoose";

export default function createGenericRouter<T extends Document>(
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
