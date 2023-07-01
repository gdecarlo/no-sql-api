import express from "express";
import createGenericRouter from "./genericRouter";
import Persona from "../models/persona";
import GenericController from "../controllers/genericController";

const personaController = new GenericController(Persona);

const router = createGenericRouter(personaController);
export default router;
