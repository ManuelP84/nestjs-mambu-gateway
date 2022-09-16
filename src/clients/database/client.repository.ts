import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { EntityRepository } from '../../database/utils/entity.repository';
import { ClientCreated } from '../entities/event/client-created.entity';

@Injectable()
export class ClientCreatedRepository extends EntityRepository<ClientCreated> {
    constructor(
        @Inject('CLIENT_MONGO_MODEL')
        private readonly clientCreatedModel: Model<ClientCreated>
    ){
        super(clientCreatedModel);
    }
}