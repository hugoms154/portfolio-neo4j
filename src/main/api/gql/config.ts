import { Neo4jGraphQL } from "@neo4j/graphql";
import { neo4jConnectionFactory } from "@/main/factory/main/db/connection.factory";
import { consolidateTypeDefs } from "./consolidate-type-defs";

export async function configureNeo4jGraphQL() {
  const driver = await neo4jConnectionFactory();
  const typeDefs = consolidateTypeDefs();

  return new Neo4jGraphQL({
    typeDefs,
    driver,
  });
}
