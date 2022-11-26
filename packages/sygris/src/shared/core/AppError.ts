export namespace AppError {
  export class UnexpectedError extends Error {
    public constructor(err: any) {
      super(`An unexpected error occurred.`);
      console.log(`[AppError]: An unexpected error occurred`);
      console.error(err);
    }
  }
}
