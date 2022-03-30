import { CreateUser } from "@/infra/db/neo4j/repositories/user/create.repository";
import { configureNeo4jOGM } from "@/main/config/db/neo4j/ogm";
import { CreateUserRepository } from "@/modules/user/app/protocols/db/repositories/create.repository";

export async function createUserRepositoryFactory(): Promise<CreateUserRepository.Repository> {
  return new CreateUser(await configureNeo4jOGM());
}