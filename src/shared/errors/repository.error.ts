import { ApolloError } from 'apollo-server-errors';

export class RepositoryError extends ApolloError {
  constructor(message: string) {
    super(message, 'REPOSITORY_ERROR');

    Object.defineProperty(this, 'name', { value: 'RepositoryError' });
  }
}
