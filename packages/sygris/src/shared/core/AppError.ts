export namespace AppError {
  export class UnexpectedError extends Error {
    public constructor(err: any) {
      super(`An unexpected error occurred.`);
    }
  }
}
