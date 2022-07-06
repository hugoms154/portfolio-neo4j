import { UuidProtocol } from "@/shared/protocols/uuid/uuid.protocol";
import { randomUUID } from "crypto";

export class UuidAdapter implements UuidProtocol.Create {
  create(): string {
    return randomUUID({ disableEntropyCache: true });
  }
}
