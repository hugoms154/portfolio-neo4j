export interface CreateToken {
  create(payload: TokenProtocol.PayloadTypes): string;
}

export interface VerifyToken {
  verify<TokenData>(token: string): TokenProtocol.BaseToken<TokenData>;
}

export namespace TokenProtocol {
  export type PayloadTypes = Record<
    string,
    object | Array<unknown> | string | number | boolean | null | Date
  >;

  export interface BaseToken<Data> {
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: string | string[] | undefined;
    exp?: number | undefined;
    iat?: number | undefined;
    data: Data;
    [key: string]: any;
  }
}
