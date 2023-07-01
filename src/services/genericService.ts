import { Document } from "mongoose";
import { IEntityService } from "./IEntityService";
import { IEntityRepository } from "../repositories/IEntityRepository";

export class GenericService<T extends Document> implements IEntityService<T> {
  constructor(private entityRepository: IEntityRepository<T>) {}

  findAll(): Promise<T[]> {
    return this.entityRepository.find();
  }

  findById(id: string): Promise<T | null> {
    return this.entityRepository.findById(id);
  }

  create(data: Partial<T>): Promise<T> {
    return this.entityRepository.create(data);
  }

  updateById(id: string, data: Partial<T>): Promise<T | null> {
    return this.entityRepository.updateById(id, data);
  }

  deleteById(id: string): Promise<T | null> {
    return this.entityRepository.deleteById(id);
  }
}
