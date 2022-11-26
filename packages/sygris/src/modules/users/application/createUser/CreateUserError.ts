import { Error } from '../../../../shared';

export namespace CreateUserErrors {
  export class EmailError extends Error {
    constructor(email: unknown) {
      super(`There was an error with the email: ${email}`);
    }
  }

  export class PasswordError extends Error {
    constructor(password: unknown) {
      super(`There was an error with the password: ${password}`);
    }
  }

  export class UserNotCreatedError extends Error {
    constructor(error: string) {
      super(`There was an error creating the user: ${error}`);
    }
  }
}
