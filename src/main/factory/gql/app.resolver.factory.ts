import { AuthResolverFactory } from "@/main/factory/gql/mutations";

export async function AppResolverFactory() {
  return {
    Mutation: {
      auth: await AuthResolverFactory(),
    },
  };
}
