import { configureNeo4jOGM } from "@/main/config/db/neo4j/ogm";

export async function OGMFactory(){
  const ogm = await configureNeo4jOGM();
  
  return ogm;
}