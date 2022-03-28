import type {
  MutationAuthArgs,
  Authentication,
} from "@/infra/db/neo4j/ogm-types";

export type AuthArgs = MutationAuthArgs;
export type AuthResponse = Authentication;