import { SRC_PATH } from "@/src-directory";
import dotenv from "dotenv";
import path from "path";

interface EnvironmentSchema {
  setup?: () => void;
  NODE_ENV: string;
  PORT: number;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  NEO4J_URL: string;
  NEO4J_USER: string;
  NEO4J_PASSWORD: string;
}

export let Env: EnvironmentSchema = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 4000,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1d",
  NEO4J_URL: process.env.NEO4J_URL || "bolt://localhost:7687",
  NEO4J_USER: process.env.NEO4J_USER,
  NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
};

Env.setup = (): void => {
  const envPath = path.resolve(SRC_PATH, "../.env");
  const { parsed } = dotenv.config({
    path: envPath,
  });
  Env = Object.assign(Env, { ...parsed });
};
