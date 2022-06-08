import { Env } from "@/main/config/system";
import { TokenProtocol } from "@/shared/protocols/token/token.protocol";
import { ApolloError } from "apollo-server-core";
import * as jwt from "jsonwebtoken";

export class JwtAdapter implements TokenProtocol.Create, TokenProtocol.Verify {
  constructor(
    private readonly secret: string,
    private readonly expiresIn: string
    ) {
    if (!this.secret) {
      throw new ApolloError("Couldn't find JWT_SECRET environment variable");
    }
  }

  create(payload: TokenProtocol.PayloadTypes): string {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
  }

  verify<TokenData>(token: string): TokenProtocol.BaseToken<TokenData> {
    return jwt.verify(token, this.secret) as TokenProtocol.BaseToken<TokenData>;
  }
}
