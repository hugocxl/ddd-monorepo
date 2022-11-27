export class Result<T> {
  public isSuccess: boolean;
  public isFailure: boolean;
  private error: T | string;
  private value: T;

  public constructor(isSuccess: boolean, value: T, error: string | T) {
    if (isSuccess && error) {
      throw new Error(
        'InvalidOperation: A result cannot be successful and contain an error',
      );
    }
    if (!isSuccess && !error) {
      throw new Error(
        'InvalidOperation: A failing result needs to contain an error message',
      );
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this.value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess) {
      console.log(this.error);
      throw new Error(
        "Can't get the value of an error result. Use 'getError' instead.",
      );
    }

    return this.value;
  }

  public getError(): T | string {
    if (this.isSuccess) {
      console.log(this.value);
      throw new Error(
        "Can't get the error of a success result. Use 'getValue' instead.",
      );
    }
    return this.error;
  }

  public static ok<U>(value: U): Result<U> {
    return new Result<U>(true, value as U, '');
  }

  public static fail<U>(error: U | string): Result<U> {
    return new Result<U>(false, null as any, error);
  }
}
