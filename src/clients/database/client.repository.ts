import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { MongooseAdapter } from '../../database/utils/mongoose-adapter.repository';
import { ClientCreated, ClientDocument } from '../entities/event/client-created.entity';

@Injectable()
export class ClientCreatedRepository extends MongooseAdapter<ClientCreated, ClientDocument> {
    constructor(
        @Inject('CLIENT_MONGO_MODEL')
        private readonly clientCreatedModel: Model<ClientDocument>
    ){
        super(clientCreatedModel);
    }
}