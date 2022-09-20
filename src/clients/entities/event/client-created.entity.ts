import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'clients' })
export class ClientCreated{
  @Prop({
    unique: true,
  })
  clientId: string;

  @Prop()
  clientName: string;

  @Prop()
  clientLastName: string;
}

export type ClientDocument = ClientCreated & Document;

export const ClientCreatedSchema = SchemaFactory.createForClass(ClientCreated);
