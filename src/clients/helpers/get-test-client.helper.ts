import { v4 as uuid } from 'uuid';
import { CreateClientDto } from '../dto';
var random = require('random-name');

export const getTestClient = (): CreateClientDto => {
  const firstName = random.first();
  const lastName = random.last();
  return {
    firstName,
    lastName,
    emailAddress: `${firstName}_${lastName}@testmail.com`,
    _personalizados: {
      External_ID: uuid(),
    },
  };
};
