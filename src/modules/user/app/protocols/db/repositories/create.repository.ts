import { CreateUsersMutationResponse, UserCreateInput } from '@/infra/db/neo4j/ogm-types';
import { DocumentNode, SelectionSetNode } from 'graphql';

export namespace CreateUserRepository {
  export type Result = CreateUsersMutationResponse;

  export interface Params {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }

  export interface Repository {
    create(args: CreateUserRepository.Params): Promise<CreateUserRepository.Result>;
  }
}
