import mongoose, { Model } from "mongoose";
import { IEntity, entitySchema } from "./interfaces/IEntity";

const Instrumento: Model<IEntity> = mongoose.model<IEntity>(
  "Instrumento",
  entitySchema
);

export default Instrumento;
