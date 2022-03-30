import { UseCase } from "@/shared/domain/use-case";
import { AuthModel } from '@/modules/auth/domain/models/authenticate.model'

export namespace Auth {
  export type Params = AuthModel.Params;
  export type Response = AuthModel.Response;

  export interface UseCase
    extends UseCase.Implementation<Params, Promise<Response>> {}
}
