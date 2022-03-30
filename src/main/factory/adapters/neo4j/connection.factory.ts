import { Neo4JConnection } from "@/main/config/db/neo4j/connection";
import * as neo4j from "neo4j-driver";

let connection: neo4j.ServerInfo;
let driver: neo4j.Driver;

export async function neo4jConnectionFactory() {
  try {
    let connectionInstance: Neo4JConnection;

    if (!connection) {
      connectionInstance = new Neo4JConnection();
      connection = await connectionInstance?.verifyConnection();
    }

    if (!driver && connection && connectionInstance) {
      driver = connectionInstance.getDriver();
    }
  } catch (error) {
    console.error(error);
  }

  return driver;
}
