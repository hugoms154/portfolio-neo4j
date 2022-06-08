import { UserRepository } from "@/infra/db/neo4j/repositories";
import { OGMFactory } from "@/main/factory/adapters/neo4j/ogm";
import { JwtTokenAdapter } from "@/main/factory/adapters/token/jwt.token";
import { AuthUseCase } from "@/modules/auth/app/use-case/auth.use-case";

export async function AuthUseCaseFactory(): Promise<AuthUseCase> {
  const findUserRepo = new UserRepository(await OGMFactory());
  return new AuthUseCase(findUserRepo, new JwtTokenAdapter());
}
