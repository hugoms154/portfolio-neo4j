import { findUserRepositoryFactory } from "@/main/factory/main/db/neo4j/user/find-user-repository.factory";
import {
  AuthArgs,
  AuthResponse
} from "@/modules/auth/domain/models/authenticate.model";

export async function authenticationResolver(
  parent: any,
  args: AuthArgs,
  context: any
): Promise<Partial<AuthResponse>> {
  const { email, password } = args;
  console.log(args);
  const findUser = await findUserRepositoryFactory();

  const [user] = await findUser.find({
    where: {
      email
    },
    selectionSet: /* GraphQL */ `
      {
        id
        name
        email
        __typename
        portfolio {
          id
          __typename
        }
      }
    `,
  });

  console.log(user)

  return { token: "token", user };
}
