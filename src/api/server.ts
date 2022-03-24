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

  console.log(
    `🚀 Server ready at http://:${process.env.PORT}${graphqlServer.graphqlPath}`
  );
}
