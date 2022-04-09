import {
  CreateUserRepository,
  FindUserRepository,
} from "@/modules/user/app/protocols/db/repositories";
import { OGM } from "@neo4j/graphql-ogm";
// TODO: What to do with this?
import { UserModel } from "@/infra/db/neo4j/ogm-types";

export class UserRepository
  implements CreateUserRepository.Repository, FindUserRepository.Implementation
{
  private repository: UserModel;

  constructor(ogm: OGM) {
    this.repository = ogm.model("User");
  }

  create(
    params: CreateUserRepository.Params
  ): Promise<CreateUserRepository.Result> {
    return this.repository.create(params);
  }

  find(params: FindUserRepository.Args): Promise<FindUserRepository.Result> {
    return this.repository.find(params);
  }
}
