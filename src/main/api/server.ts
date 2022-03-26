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
    nodeServer.listen({ port: process.env.PORT || 4000 }, resolve)
  );

  const messageForLocalhost = `http://localhost:${process.env.PORT}${graphqlServer.graphqlPath}`;
  const messageForProduction = `:port/endpoint :${process.env.PORT}${graphqlServer.graphqlPath}`;
  console.log(
    `🚀 Server ready at ${
      process.env.NODE_ENV === "production"
        ? messageForProduction
        : messageForLocalhost
    }`
  );
}
