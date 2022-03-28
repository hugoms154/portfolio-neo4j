export interface TokenProtocol {
  create(payload: any): string;
  verify(token: string): any;
}
