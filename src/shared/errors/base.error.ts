import { UuidFactory } from "@/main/factory/adapters/uuid";
import { ApolloError } from "apollo-server-core";

export class BaseError extends ApolloError {
  constructor(message: string, code: string, extensions = {}) {
    const uuid = UuidFactory();
    extensions["uuid"] = uuid.create();

    super(message, code, extensions);

    Object.defineProperty(this, "name", { value: "BaseError", writable: true });
  }
}
