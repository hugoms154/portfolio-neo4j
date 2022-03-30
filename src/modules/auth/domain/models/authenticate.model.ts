import type {
  MutationAuthArgs,
  Authentication,
} from "@/infra/db/neo4j/ogm-types";

export namespace AuthModel {
  export type Params = MutationAuthArgs;
  export type Response = Authentication;
}
