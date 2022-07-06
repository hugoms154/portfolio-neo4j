import { InternalServerError } from "@/shared/errors";
import {
  CreateToken,
  TokenProtocol,
  VerifyToken,
} from "@/shared/protocols/token/token.protocol";
import jwt from "jsonwebtoken";

export class JwtAdapter implements CreateToken, VerifyToken {
  constructor(
    private readonly secret: string,
    private readonly expiresIn: string
  ) {
    if (!this.secret) {
      throw new InternalServerError(
        "Couldn't find JWT_SECRET environment variable"
      );
    }

    if (!this.expiresIn) {
      throw new InternalServerError(
        "Couldn't find JWT_EXPIRES_IN environment variable"
      );
    }
  }

  create(payload: TokenProtocol.PayloadTypes): string {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
  }

  verify<TokenData>(token: string): TokenProtocol.BaseToken<TokenData> {
    return jwt.verify(token, this.secret) as TokenProtocol.BaseToken<TokenData>;
  }
}
