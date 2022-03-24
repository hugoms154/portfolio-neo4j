import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import { neoSchema } from "./config";

export async function configureGraphQLServer(httpServer: http.Server) {
  return new ApolloServer({
    schema: await neoSchema.getSchema(),
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: async ({ req }) => {
      console.log('TODO CONTEXT');
    },
  });
}
