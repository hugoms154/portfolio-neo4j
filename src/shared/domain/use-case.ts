export interface UseCase<Params, Response> {
  exec(params: Params): Response;
}
