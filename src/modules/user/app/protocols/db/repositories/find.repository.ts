import { UserOptions, UserWhere } from "@/infra/db/neo4j/ogm-types";
import { User } from "@/modules/user/domain/models/user";
import { DocumentNode, SelectionSetNode } from "graphql";

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

  export interface Repository {
    find(args: Args): Promise<Result>;
  }
}
