import { generate, OGM } from "@neo4j/graphql-ogm";
import * as path from "path";
import { SRC_PATH } from "@/src-directory";
import { consolidateTypeDefs } from "@/main/api/gql/consolidate-type-defs";
import { neo4jConnectionFactory } from "@/main/factory/main/db/neo4j/connection.factory";

if (process.env.GENERATE === "true") {
  (async () => {
    const outFile = path.join(SRC_PATH, "infra", "db", "neo4j", "ogm-types.ts");
    const driver = await neo4jConnectionFactory();
    const typeDefs = consolidateTypeDefs();

    generate({
      ogm: new OGM({
        typeDefs,
        driver,
      }),
      outFile,
    }).then(() => {
      console.log("Types Generated");
      process.exit(1);
    });
  })();
}
