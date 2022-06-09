import { AuthResolver } from "@/modules/auth/gql/resolvers/auth.resolver";
import { AuthUseCaseFactory } from "@/main/factory/use-case";

export async function AuthResolverFactory() {
  return new AuthResolver(await AuthUseCaseFactory());
}