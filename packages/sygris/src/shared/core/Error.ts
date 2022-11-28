export abstract class Error {
  public readonly message: string;

  constructor(message: string) {
    this.message = message;
    console.error(`[Error]: An unexpected error occurred`);
    console.error(message);
  }
}
