import { Env } from "@/main/config/system";
import { TokenProtocol } from "@/shared/protocols/token/token.protocol";
import { ApolloError } from "apollo-server-core";
import * as jwt from "jsonwebtoken";

export class JwtAdapter implements TokenProtocol.Create, TokenProtocol.Verify {
  private secret: string;

  constructor() {
    this.secret = Env.JWT_SECRET;

    if (!this.secret) {
      throw new ApolloError("Couldn't find JWT_SECRET environment variable");
    }
  }

  create(payload: TokenProtocol.PayloadTypes): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1d" });
  }

  verify<TokenData>(token: string): TokenProtocol.BaseToken<TokenData> {
    return jwt.verify(token, this.secret) as TokenProtocol.BaseToken<TokenData>;
  }
}
