import { AuthUseCaseFactory } from "@/main/factory/use-case";
import { AuthResolver } from "@/modules/auth/gql/resolvers/auth.resolver";

export async function AuthResolverFactory() {
  return AuthResolver(await AuthUseCaseFactory());
}
