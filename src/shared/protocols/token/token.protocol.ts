export namespace TokenProtocol {
  export interface Create {
    create(payload: any): string;
  }

  export interface Verify {
    verify(token: string): any;
  }
}
