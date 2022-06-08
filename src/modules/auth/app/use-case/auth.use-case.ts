import { TokenProtocol } from "@/shared/protocols/token/token.protocol";
import { Auth } from "@/modules/auth/domain/use-case/auth.use-case";
import { FindUserRepository } from "@/modules/user/app/protocols/db/repositories/find.repository";
import { ApolloError } from "apollo-server-core";

export class AuthUseCase implements Auth.UseCase {
  constructor(
    private findUserRepo: FindUserRepository,
    private tokenAdapter: TokenProtocol.Create
  ) {
    if (this.findUserRepo === undefined) {
      throw new ApolloError("FindUserRepository is undefined");
    }
  }

  async exec(params: Auth.Params): Promise<Auth.Response> {
    const [user] = await this.findUserRepo.find({
      where: {
        email: params.email,
      },
      selectionSet: /* GraphQL */ `
        {
          id
          email
          name
          password
          active
          createdAt
          updatedAt
          portfolio {
            id
            name
            assets {
              id
              ticker
              price
              category {
                id
                name
              }
              sector {
                id
                name
              }
              segment {
                id
                name
              }
            }
          }
        }
      `,
    });

    if (!(user.password === params.password) || !user) {
      throw new ApolloError("Couldn't perform this action");
    }

    const token = this.tokenAdapter.create(user);

    return { token, user };
  }
}
