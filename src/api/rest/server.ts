import express from "express";
import http from "http";
import cookieParser from "cookie-parser";

export function configureRESTServer() {
  const app = express();
  
  app.use(cookieParser());

  const httpServer = http.createServer(app);

  return { nodeServer: httpServer, express: app };
}
