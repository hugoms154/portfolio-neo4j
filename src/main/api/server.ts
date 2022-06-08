import { Env } from "@/main/config/system";
import { configureGraphQLServer } from "./gql/server";
import { configureRESTServer } from "./rest/server";

export async function startServer() {
  const { nodeServer, express } = configureRESTServer();
  const graphqlServer = await configureGraphQLServer(nodeServer);

  await graphqlServer.start();

  graphqlServer.applyMiddleware({
    app: express,
    path: "/api/graphql",
  });

  await new Promise<void>((resolve) =>
    nodeServer.listen({ port: Env.PORT || 4000 }, resolve)
  );

  const messageForLocalhost = `http://localhost:${Env.PORT}${graphqlServer.graphqlPath}`;
  const messageForProduction = `:port/endpoint :${Env.PORT}${graphqlServer.graphqlPath}`;
  console.log(
    `🚀 Server ready at ${
      Env.NODE_ENV === "production" ? messageForProduction : messageForLocalhost
    }`
  );
}
