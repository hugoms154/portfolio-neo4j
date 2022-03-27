import { ModelMap } from "@infra/db/neo4j/ogm-types";
import { consolidateTypeDefs } from "@main/api/gql/consolidate-type-defs";
import { neo4jConnectionFactory } from "@main/factory/main/db/connection.factory";
import { OGM } from "@neo4j/graphql-ogm";

export async function configureNeo4jOGM() {
  const driver = await neo4jConnectionFactory();
  const typeDefs = consolidateTypeDefs();

  return new OGM<ModelMap>({
    typeDefs,
    driver,
  });
}
