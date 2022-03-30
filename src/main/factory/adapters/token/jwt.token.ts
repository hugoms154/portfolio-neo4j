import * as jwt from 'jsonwebtoken';
import { TokenProtocol } from "@/shared/protocols/token/token.protocol";
import { ApolloError } from 'apollo-server-core';

export class JwtTokenAdapter implements TokenProtocol.Create, TokenProtocol.Verify {
  private secret: string;
  constructor() {
    this.secret = process.env.JWT_SECRET;

    if(!this.secret) {
      throw new ApolloError("Couldn't find JWT_SECRET environment variable");
    }
  }

  create(payload: any): string {
    return jwt.sign(payload, this.secret, { expiresIn: '1d' });
  }

  verify(token: string) {
    return jwt.verify(token, this.secret);
  }
}
