import { JwtAdapter } from "@/infra/token/jwt";
import { Env } from "@/main/config/system";

export function JwtTokenFactory(){
  return new JwtAdapter(Env.JWT_SECRET, Env.JWT_EXPIRES_IN);
}