import { Auth } from "@/modules/auth/domain/use-case/auth.use-case";
import { FindUserRepository } from "@/modules/user/app/protocols/db/repositories/find.repository";
import { InternalServerError } from "@/shared/errors";
import { CreateToken } from "@/shared/protocols/token/token.protocol";

export class AuthUseCase implements Auth.UseCase {
  constructor(
    private findUserRepo: FindUserRepository,
    private token: CreateToken
  ) {
    if (this.findUserRepo === undefined) {
      throw new InternalServerError("FindUserRepository is undefined");
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
      throw new InternalServerError("Couldn't perform this action");
    }

    const token = this.token.create({ id: user.id });

    return { token, user };
  }
}
