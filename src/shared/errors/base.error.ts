import { ApolloError } from "apollo-server-core";

export class BaseError extends ApolloError {
  constructor(message: string, code: string, extensions = {}) {
    super(message, code, extensions);

    Object.defineProperty(this, "name", { value: "BaseError", writable: true });
  }
}
