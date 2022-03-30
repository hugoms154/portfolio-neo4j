import { neo4jConnectionFactory } from '@/main/factory/main/db/neo4j/connection.factory';
import { userResolvers } from '@/modules/auth/gql/resolvers';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { consolidateTypeDefs } from './consolidate-type-defs';


export async function configureNeo4jGraphQL() {
  const driver = await neo4jConnectionFactory();
  const typeDefs = consolidateTypeDefs();

  return new Neo4jGraphQL({
    resolvers: [userResolvers],
    typeDefs,
    driver,
  });
}
