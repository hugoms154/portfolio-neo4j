import { generate, OGM } from "@neo4j/graphql-ogm";
import { typeDefs } from "./entities";
import * as path from "path";
import * as neo4j from "neo4j-driver";
import { Neo4JConnection } from "../../infra/db";

if (process.env.GENERATE === "true") {
  (() => {
    const outFile = path.join(__dirname, "ogm-types.ts");

    generate({
      ogm: new OGM({
        typeDefs,
        driver: new Neo4JConnection().getDriver(),
      }),
      outFile,
    }).then(() => {
      console.log("Types Generated");
      process.exit(1);
    });
  })();
}
