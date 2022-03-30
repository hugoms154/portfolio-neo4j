import { JwtTokenAdapter } from "@/main/factory/adapters/token/jwt.token";
import { findUserRepositoryFactory } from "@/main/factory/adapters/neo4j/user/find-user-repository.factory";
import { AuthUseCase } from "@/modules/auth/app/use-case/auth.use-case";

export async function AuthUseCaseFactory(): Promise<AuthUseCase> {
  const findUserRepo = await findUserRepositoryFactory();
  return new AuthUseCase(findUserRepo, new JwtTokenAdapter());
}
