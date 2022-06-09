import { UseCase as BaseUseCase } from "@/shared/domain/use-case";
import { AuthModel } from "@/modules/auth/domain/models/auth.model";

export namespace Auth {
  export type Params = AuthModel.Params;
  export type Response = AuthModel.Response;
  export type UseCase = BaseUseCase<Params, Promise<Response>>;
}
