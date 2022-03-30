import { authenticationResolver } from "./authentication.resolver";

export const authResolvers = {
  Mutation: {
    auth: authenticationResolver
  }
}