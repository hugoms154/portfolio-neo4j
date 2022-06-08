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
  export interface Create {
    create(payload: PayloadTypes): string;
  }

  export interface Verify {
    verify<TokenData>(token: string): BaseToken<TokenData>;
  }
}
