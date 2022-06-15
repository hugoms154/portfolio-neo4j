import {
  CreateUserRepository,
  FindUserRepository,
} from "@/modules/user/app/protocols/db/repositories";
// TODO: What to do with this?
import { UserModel } from "@/infra/db/neo4j/ogm-types";

export class UserRepository
  implements CreateUserRepository, FindUserRepository
{
  constructor(private readonly ogm: UserModel) {}

  create(
    params: CreateUserRepository.Params
  ): Promise<CreateUserRepository.Result> {
    return this.ogm.create(params);
  }

  find(params: FindUserRepository.Params): Promise<FindUserRepository.Result> {
    return this.ogm.find(params);
  }
}
