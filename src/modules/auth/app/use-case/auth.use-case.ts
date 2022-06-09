import { Auth } from "@/modules/auth/domain/use-case/auth.use-case";
import { FindUserRepository } from "@/modules/user/app/protocols/db/repositories/find.repository";
import {
  ActionFailedError,
  ProtocolError,
  RepositoryError,
} from "@/shared/errors";
import { TokenProtocol } from "@/shared/protocols/token/token.protocol";

export class AuthUseCase implements Auth.UseCase {
  constructor(
    private findUserRepo: FindUserRepository,
    private token: TokenProtocol.Create
  ) {
    if (this.token === undefined || !this.token) {
      throw new ProtocolError("token is undefined");
    }

    if (this.findUserRepo === undefined || !this.findUserRepo) {
      throw new RepositoryError("FindUserRepository is undefined");
    }
  }

  async exec(params: Auth.Params): Promise<Auth.Response> {
    const [user] = await this.findUserRepo.find({
      where: {
        email: params.email,
        active: true,
      },
      selectionSet: /* GraphQL */ `
        {
          id
          password
          active
        }
      `,
    });

    if (!(user.password === params.password) || !user) {
      throw new ActionFailedError("Couldn't perform this action");
    }

    const token = this.token.create({ id: user.id });

    return { token, user };
  }
}
