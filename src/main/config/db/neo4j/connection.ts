import { Env } from "@/main/config/system";
import * as neo4j from "neo4j-driver";

export class Neo4JConnection {
  private readonly driver: neo4j.Driver;

  constructor(
    uri: string = "bolt://localhost:7687",
    user: string = "neo4j",
    password: string = "123123"
  ) {
    this.driver = neo4j.driver(
      Env.NEO4J_URL ?? uri,
      neo4j.auth.basic(
        Env.NEO4J_USER ?? user,
        Env.NEO4J_PASSWORD ?? password
      )
    );
  }

  async verifyConnection(): Promise<neo4j.ServerInfo> {
    return this.driver.verifyConnectivity();
  }

  async disconnect(): Promise<void> {
    return this.driver.close();
  }

  getDriver(): neo4j.Driver {
    return this.driver;
  }
}
