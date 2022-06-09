import { AuthGraphQL } from "@/modules/auth/domain/gql/auth.resolver";
import { Auth } from "@/modules/auth/domain/use-case/auth.use-case";

export class AuthResolver implements AuthGraphQL.Resolver {
  constructor(private readonly authUseCase: Auth.UseCase) {}

  async resolve(
    _parent: unknown,
    request: AuthGraphQL.Params,
    _context: unknown
  ): Promise<AuthGraphQL.Response> {
    return await this.authUseCase.exec(request);
  }
}
