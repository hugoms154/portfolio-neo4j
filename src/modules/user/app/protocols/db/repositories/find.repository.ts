import { UserOptions, UserWhere } from "@/infra/db/neo4j/ogm-types";
import { User } from "@/modules/user/domain/models/user";
import { DocumentNode, SelectionSetNode } from "graphql";

export interface FindUserRepository {
  find(args: FindUserRepository.Args): Promise<FindUserRepository.Result>;
}
export namespace FindUserRepository {
  type Where = UserWhere;
  type Options = UserOptions;

  export type Result = User[];

  export interface Args {
    where?: Where;
    options?: Options;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }
}
