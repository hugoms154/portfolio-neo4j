import { ApolloError } from 'apollo-server-errors';

export class ProtocolError extends ApolloError {
  constructor(message: string) {
    super(message, 'PROTOCOL_ERROR');

    Object.defineProperty(this, 'name', { value: 'ProtocolError' });
  }
}
