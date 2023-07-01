import mongoose, { Model } from "mongoose";
import { IEntity, entitySchema } from "./interfaces/IEntity";

const Persona: Model<IEntity> = mongoose.model<IEntity>(
  "Persona",
  entitySchema
);

export default Persona;
