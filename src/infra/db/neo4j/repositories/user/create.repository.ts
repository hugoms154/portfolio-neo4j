import { CreateUserRepository } from "@/modules/user/app/protocols/db/repositories/create.repository";
import { OGM } from "@neo4j/graphql-ogm";
import { UserModel } from "./user.repository";

export class CreateUser implements CreateUserRepository.Repository {
  private repository: UserModel
  constructor(ogm: OGM) {
      this.repository = ogm.model("User");
  }

  create(
    params: CreateUserRepository.Params
  ): Promise<CreateUserRepository.Result> {
    return this.repository.create(params);
  }
}
