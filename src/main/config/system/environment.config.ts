interface EnvironmentSchema {
  NODE_ENV: string;
  PORT: number;
  JWT_SECRET: string;
  NEO4J_URL: string;
  NEO4J_USER: string;
  NEO4J_PASSWORD: string;
}

export const Env: EnvironmentSchema = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
  JWT_SECRET: process.env.JWT_SECRET || "very-secret",
  NEO4J_URL: process.env.NEO4J_URL || "bolt://localhost:7687",
  NEO4J_USER: process.env.NEO4J_USER || "neo4j",
  NEO4J_PASSWORD: process.env.NEO4J_PASSWORD || "123123",
};
