import { BaseError } from "./base.error";

export class InternalServerError extends BaseError {
  constructor(message: string, extensions?: Record<string, any>) {
    super(message, "INTERNAL_SERVER_ERROR", extensions);

    Object.defineProperty(this, "name", { value: "InternalServerError" });
  }
}
