import { Schema, Document } from "mongoose";

export interface IEntity extends Document {
  nombre: string;
}

export const entitySchema: Schema = new Schema({
  nombre: String,
});
