import { Injectable } from '@nestjs/common';

import { Client } from '../entities/client/client.entity';
import { ResponseClientDto } from '../dto/response-client.dto';
import { ClientCreatedEvent } from '../events/client-created/client-created.event';

@Injectable()
export class ClientFactory {
  create(data: ResponseClientDto): Client {
    const client = new Client(
      data.encodedKey,
      data.id,
      data.firstName,
      data.lastName,
      data.gender,
      data.state,
      data.creationDate,
      data.lastModifiedDate,
      data.approvedDate,
      data.preferredLanguage,
      data.loanCycle,
      data.groupLoanCycle,
      data.encodedKey,
    );
    client.apply(
      new ClientCreatedEvent(client.id, client.firstNam, client.lastNam),
    );
    return client;
  }
}
