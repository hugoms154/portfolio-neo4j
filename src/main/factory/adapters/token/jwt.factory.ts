import { JwtAdapter } from "@/infra/token/jwt";

export function JwtTokenFactory(){
  return new JwtAdapter();
}