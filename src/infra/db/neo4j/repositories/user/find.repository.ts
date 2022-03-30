import { FindUserRepository } from "@/modules/user/app/protocols/db/repositories/find.repository";
import { OGM } from "@neo4j/graphql-ogm";
import { UserModel } from "./user.repository";

export class FindUser implements FindUserRepository.Repository {
  private repository: UserModel;
  constructor(ogm: OGM) {
    this.repository = ogm.model("User");
  }

  find(params: FindUserRepository.Args): Promise<FindUserRepository.Result> {
    return this.repository.find(params);
  }
}
