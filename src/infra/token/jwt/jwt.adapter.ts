import { TokenProtocol } from "@/shared/protocols/token/token.protocol";
import * as jwt from "jsonwebtoken";

export class JwtAdapter implements TokenProtocol {
  create(payload: any): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string);
  }

  verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  }
}
