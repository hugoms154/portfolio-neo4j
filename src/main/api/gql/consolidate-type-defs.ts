import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import * as fs from "fs";
import { print } from "graphql";
import * as path from "path";
import { SRC_PATH } from "@/src-directory";

export function consolidateTypeDefs(writeFs: boolean = false) {
  console.log("Consolidando typeDefs");
  const modulesPath = path.join(SRC_PATH, "**", "gql", "**", "*");
  const loadedFiles = loadFilesSync(modulesPath, { extensions: ["graphql"] });

  const typeDefs = mergeTypeDefs(loadedFiles);

  if (writeFs) {
    const printedTypeDefs = print(typeDefs);

    fs.writeFileSync("type-defs.schema.graphql", printedTypeDefs);
  }

  return typeDefs;
}
