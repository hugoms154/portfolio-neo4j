import { SRC_PATH } from "@/src-directory";
import { generate } from "@neo4j/graphql-ogm";
import * as path from "path";
import { OGMFactory } from "@/main/factory/adapters/neo4j/ogm";

if (process.env.GENERATE === "true") {
  (async () => {
    const outFile = path.join(SRC_PATH, "infra", "db", "neo4j", "ogm-types.ts");

    generate({
      ogm: await OGMFactory(),
      outFile,
    }).then(() => {
      console.log("Types Generated");
      process.exit(1);
    });
  })();
}
