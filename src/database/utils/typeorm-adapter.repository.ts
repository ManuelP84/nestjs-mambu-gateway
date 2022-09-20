import { NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

export abstract class TypeOrmAdapter<TModel> {
  constructor(protected readonly entityModel: Repository<TModel>) {}

  async findOne(options: FindOneOptions<TModel>): Promise<TModel> {
    const entity = await this.entityModel.findOne(options); // Revisar

    if (!entity) {
      throw new NotFoundException('Entity was not found.');
    }

    return entity;
  }

  async find(options?: FindManyOptions<TModel>): Promise<TModel[]> {
    return this.entityModel.find(options);
  }

  async create(entity: DeepPartial<TModel>): Promise<TModel> {
    const newEntity = await this.entityModel.create(entity);
    return await this.entityModel.save(newEntity);
  }

  async findOneAndReplace(
    options: FindOneOptions<TModel>,
    entity: DeepPartial<TModel>,
  ): Promise<void> {
    const dbEntity = await this.findOne(options);

    if (!dbEntity) throw new NotFoundException('Unable to update and replace.');

    const updatedEntity = this.entityModel.save(
      await this.entityModel.preload(entity),
    );

    if (!updatedEntity) {
      throw new NotFoundException('Unable to update and replace.');
    }
  }
}
