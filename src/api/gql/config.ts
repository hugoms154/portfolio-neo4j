import { Neo4jGraphQL } from '@neo4j/graphql';
import { OGM } from '@neo4j/graphql-ogm';
import { Neo4JConnection } from '../../infra/db';
import { typeDefs } from './entities';
import { ModelMap } from './ogm-types';


const dbConnection = new Neo4JConnection();

export const ogm = new OGM<ModelMap>({
  typeDefs,
  driver: dbConnection.getDriver(),
});

export const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver: dbConnection.getDriver(),
});
