import { ModelMap } from "@/infra/db/neo4j/ogm-types";
import { consolidateTypeDefs } from "@/main/api/gql/consolidate-type-defs";
import { neo4jConnectionFactory } from "@/main/factory/adapters/neo4j/connection.factory";
import { authResolvers } from "@/modules/auth/gql/resolvers";
import { OGM } from "@neo4j/graphql-ogm";

export async function configureNeo4jOGM(): Promise<OGM<ModelMap>> {
  const driver = await neo4jConnectionFactory();
  const typeDefs = consolidateTypeDefs();

  const ogm = new OGM<ModelMap>({
    resolvers: [authResolvers],
    typeDefs,
    driver,
  });

  await ogm.init();

  return ogm;
}
