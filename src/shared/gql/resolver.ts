export interface Resolver<Request, Response> {
  resolve(parent: unknown, request: Request, context: unknown): Response;
}
