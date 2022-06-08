import { UserRepository } from "@/infra/db/neo4j/repositories";
import { OGMFactory } from "@/main/factory/adapters/neo4j/ogm";
import { FindUserRepository } from "@/modules/user/app/protocols/db/repositories/find.repository";

export async function findUserRepositoryFactory(): Promise<FindUserRepository> {
  const ogm = await OGMFactory();
  
  return new UserRepository(ogm);
}
