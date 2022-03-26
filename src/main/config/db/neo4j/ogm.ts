import { OGM } from "@neo4j/graphql-ogm";
import { ModelMap } from "../../../../infra/db/neo4j/ogm-types";
import { consolidateTypeDefs } from "../../../api/gql/consolidate-type-defs";
import { neo4jConnectionFactory } from "../../../factory/main/db/connection.factory";

export async function configureNeo4jOGM() {
  const driver = await neo4jConnectionFactory();
  const typeDefs = consolidateTypeDefs();

  return new OGM<ModelMap>({
    typeDefs,
    driver,
  });
}
