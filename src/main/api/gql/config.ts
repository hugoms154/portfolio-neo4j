import { neo4jConnectionFactory } from "@/main/factory/adapters/neo4j/connection.factory";
import { AppResolverFactory } from "@/main/factory/gql/app.resolver.factory";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { consolidateTypeDefs } from "./consolidate-type-defs";

export async function configureNeo4jGraphQL() {
  const driver = await neo4jConnectionFactory();
  const typeDefs = consolidateTypeDefs();

  return new Neo4jGraphQL({
    resolvers: [await AppResolverFactory()],
    typeDefs,
    driver,
  });
}
