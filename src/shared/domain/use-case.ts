export namespace UseCase {
  export interface Implementation<P, R> {
    exec(params: P): R;
  }

}