import { User } from "@/modules/user/domain/models/user";

export namespace AuthModel {
  export interface Params {
    email: string;
    password: string;
  }

  export interface Response {
    token: string;
    user: User;
  }
}
