import { UuidAdapter } from "@/infra/uuid/crypto";

export function UuidFactory() {
  return new UuidAdapter();
}
