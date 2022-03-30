import { UserRepository } from "@/infra/db/neo4j/repositories";
import { OGMFactory } from "@/main/factory/adapters/neo4j/ogm";
import { CreateUserRepository } from "@/modules/user/app/protocols/db/repositories/create.repository";

export async function createUserRepositoryFactory(): Promise<CreateUserRepository.Repository> {
  const ogm = await OGMFactory();
  
  return new UserRepository(ogm);
}
