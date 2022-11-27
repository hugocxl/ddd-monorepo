import { AppError } from '../../../../../shared';
import { UserToken } from '../../../domain';
import { UserSignInErrors } from './UserSignInError';

export type UserSignInResponse =
  | UserToken
  | UserSignInErrors.EmailError
  | UserSignInErrors.PasswordError
  | UserSignInErrors.UserNotLogged
  | AppError.UnexpectedError;
