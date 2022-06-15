import * as neo4j from "neo4j-driver";

export class Neo4JConnection {
  private readonly driver: neo4j.Driver;

  constructor(uri: string, user: string, password: string) {
    this.driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
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
