import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import { configureNeo4jGraphQL } from "./config";

export async function configureGraphQLServer(httpServer: http.Server) {
  const neoSchema = await configureNeo4jGraphQL();
  return new ApolloServer({
    schema: await neoSchema.getSchema(),
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: async ({ req }) => {},
  });
}
