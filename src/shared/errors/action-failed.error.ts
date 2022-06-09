import { ApolloError } from 'apollo-server-errors';

export class ActionFailedError extends ApolloError {
  constructor(message: string) {
    super(message, 'ACTION_FAILED_ERROR');

    Object.defineProperty(this, 'name', { value: 'ActionFailedError' });
  }
}
