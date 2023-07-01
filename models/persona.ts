import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPersona extends Document {
  nombre: string;
}

const personaSchema: Schema = new Schema({
  nombre: String,
});

const Persona: Model<IPersona> = mongoose.model<IPersona>(
  "Persona",
  personaSchema
);

export default Persona;
