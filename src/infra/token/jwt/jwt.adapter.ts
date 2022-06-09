import { ProtocolError } from "@/shared/errors";
import { TokenProtocol } from "@/shared/protocols/token/token.protocol";
import * as jwt from "jsonwebtoken";

export class JwtAdapter implements TokenProtocol.Create, TokenProtocol.Verify {
  constructor(
    private readonly secret: string,
    private readonly expiresIn: string
  ) {
    if (!this.secret) {
      throw new ProtocolError("Couldn't find JWT_SECRET environment variable");
    }

    if (!this.expiresIn) {
      throw new ProtocolError(
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
