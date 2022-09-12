import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'clients' })
export class ClientCreated extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  clientId: string;

  @Prop({
    unique: true,
    index: true,
  })
  clientName: string;

  @Prop({
    unique: true,
    index: true,
  })
  clientLastName: string;
}

export const CLientCreatedSchema = SchemaFactory.createForClass(ClientCreated);
