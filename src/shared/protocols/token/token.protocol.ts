export namespace TokenProtocol {
  export type PayloadTypes = Record<
    string,
    object | Array<unknown> | string | number | boolean | null | Date
  >;

  export interface Create {
    create(payload: PayloadTypes): string;
  }

  export interface Verify {
    verify(token: string): any;
  }
}
