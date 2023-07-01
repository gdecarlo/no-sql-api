const express = require("express");
const router = express.Router();

module.exports = function (controller) {
  router.get("/", controller.getAllEntities);
  router.get("/:id", controller.getEntityById);
  router.post("/", controller.createEntity);
  router.put("/:id", controller.updateEntity);
  router.delete("/:id", controller.deleteEntity);

  return router;
};
