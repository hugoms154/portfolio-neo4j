import { JwtAdapter } from "@/infra/token/jwt";

export function JWTFactory(){
  return new JwtAdapter();
}