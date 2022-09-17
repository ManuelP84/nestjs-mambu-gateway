import { FilterQuery, Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { BaseEntityRepository } from '../interfaces/entity-repository.interface';

export abstract class MongooseAdapter<TSchema>
  implements BaseEntityRepository<TSchema>
{
  constructor(protected readonly entityModel: Model<TSchema>) {}

  async findOne(entityFilterQuery?: FilterQuery<TSchema>): Promise<TSchema> {
    const entityDocument = await this.entityModel.findOne(
      entityFilterQuery,
      {},
      { lean: true },
    );

    if (!entityDocument) {
      throw new NotFoundException('Entity was not found.');
    }

    return entityDocument;
  }

  async find(entityFilterQuery?: FilterQuery<TSchema>): Promise<TSchema[]> {
    return this.entityModel.find(entityFilterQuery, {}, { lean: true });
  }

  async create(schema: TSchema): Promise<TSchema> {
    return await this.entityModel.create(schema);
  }

  async findOneAndReplace(
    entityFilterQuery?: FilterQuery<TSchema>,
    schema?: TSchema,
  ): Promise<void> {
    const updatedDocument = await this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      schema,
      {
        new: true,
        useFindAndModify: false,
        lean: true,
      },
    );

    if (!updatedDocument) {
      throw new NotFoundException('Unable to update and replace.');
    }
  }
}
