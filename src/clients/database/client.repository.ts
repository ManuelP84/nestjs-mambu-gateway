import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { MongooseAdapter } from '../../database/utils/mongoose-adapter.repository';
import { ClientCreated } from '../entities/event/client-created.entity';

@Injectable()
export class ClientCreatedRepository extends MongooseAdapter<ClientCreated> {
    constructor(
        @Inject('CLIENT_MONGO_MODEL')
        private readonly clientCreatedModel: Model<ClientCreated>
    ){
        super(clientCreatedModel);
    }
}