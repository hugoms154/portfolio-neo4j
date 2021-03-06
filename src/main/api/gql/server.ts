import { UuidFactory } from "@/main/factory/adapters/uuid";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import http from "http";
import { configureNeo4jGraphQL } from "./config";
import { GraphQLContext } from "./context";
import { ResponseExtensionsPlugin } from "./plugins";

export async function configureGraphQLServer(httpServer: http.Server) {
  const neoSchema = await configureNeo4jGraphQL();
  return new ApolloServer({
    schema: await neoSchema.getSchema(),
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ResponseExtensionsPlugin,
    ],
    context: async ({ req }): Promise<GraphQLContext> => {
      const uuid = UuidFactory();

      return {
        uuid: uuid.create(),
      };
    },
  });
}
