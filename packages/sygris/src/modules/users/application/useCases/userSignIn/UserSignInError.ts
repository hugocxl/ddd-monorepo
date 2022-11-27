import { Error } from '../../../../../shared';

export namespace UserSignInErrors {
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

  export class UserNotLogged extends Error {
    constructor(error: string) {
      super(`There was an error with the user loggin: ${error}`);
    }
  }
}
