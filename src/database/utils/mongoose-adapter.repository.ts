import { FilterQuery, Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

export abstract class MongooseAdapter<TSchema, TDocument>
{
  constructor(protected readonly entityModel: Model<TDocument>) {}

  async findOne(entityFilterQuery?: FilterQuery<TDocument>): Promise<TDocument> {
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

  async find(entityFilterQuery?: FilterQuery<TSchema>): Promise<TDocument[]> {
    return this.entityModel.find(entityFilterQuery, {}, { lean: true });
  }

  async create(document: TDocument): Promise<TDocument> {
    return await this.entityModel.create(document);
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
