import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'clients' })
export class ClientCreated{
  @Prop({
    unique: true,
  })
  encodedKey: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;
}

export type ClientDocument = ClientCreated & Document;

export const ClientCreatedSchema = SchemaFactory.createForClass(ClientCreated);
