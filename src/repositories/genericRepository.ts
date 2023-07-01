import { Model, Document } from "mongoose";
import { IEntityRepository } from "./IEntityRepository";

export class GenericRepository<T extends Document>
  implements IEntityRepository<T>
{
  constructor(private entityModel: Model<T>) {}

  find(): Promise<T[]> {
    return this.entityModel.find().exec();
  }

  findById(id: string): Promise<T | null> {
    return this.entityModel.findById(id).exec();
  }

  create(data: Partial<T>): Promise<T> {
    const entity = new this.entityModel(data);
    return entity.save();
  }

  updateById(id: string, data: Partial<T>): Promise<T | null> {
    return this.entityModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  deleteById(id: string): Promise<T | null> {
    return this.entityModel.findByIdAndRemove(id).exec();
  }
}
