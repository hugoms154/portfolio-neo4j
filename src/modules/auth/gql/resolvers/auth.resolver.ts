import { AuthGraphQL } from "@/modules/auth/domain/gql/auth.resolver";
import { Auth } from "@/modules/auth/domain/use-case/auth.use-case";

export function AuthResolver(authUseCase: Auth.UseCase) {
  return async (_parent: unknown, request: AuthGraphQL.Params) => {
    return authUseCase.exec(request);
  };
}
