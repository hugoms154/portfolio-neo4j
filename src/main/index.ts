import { startServer } from "./api/server";
import { Env } from "./config/system";

Env.setup();
startServer();
