import { AuthUseCaseFactory } from "@/main/factory/use-case/auth-use-case.factory";
import { Auth } from "@/modules/auth/domain/use-case/auth.use-case";

export async function authenticationResolver(
  parent: any,
  params: Auth.Params,
  context: any
): Promise<Partial<Auth.Response>> {
  const authUseCase = await AuthUseCaseFactory();

  const { token, user } = await authUseCase.exec(params);

  return { token, user };
}
