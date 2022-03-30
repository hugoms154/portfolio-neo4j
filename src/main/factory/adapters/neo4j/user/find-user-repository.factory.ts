import { FindUser } from "@/infra/db/neo4j/repositories/user/find.repository";
import { configureNeo4jOGM } from "@/main/config/db/neo4j/ogm";
import { FindUserRepository } from "@/modules/user/app/protocols/db/repositories/find.repository";

export async function findUserRepositoryFactory(): Promise<FindUserRepository.Repository> {
  return new FindUser(await configureNeo4jOGM());
}
