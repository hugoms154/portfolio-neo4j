import { Authentication, MutationAuthArgs } from "@/infra/db/neo4j";
import { Resolver as BaseResolver } from "@/shared/gql/resolver";

export namespace AuthGraphQL {
  export type Params = MutationAuthArgs;
  export type Response = Authentication;
  export type Resolver = BaseResolver<Params, Promise<Response>>;
}
