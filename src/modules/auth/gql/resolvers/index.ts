import { authenticationResolver } from "./authentication.resolver";

export const userResolvers = {
  Mutation: {
    auth: authenticationResolver
  }
}