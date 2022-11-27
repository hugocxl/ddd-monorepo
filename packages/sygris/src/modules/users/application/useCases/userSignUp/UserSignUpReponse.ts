import { AppError } from '../../../../../shared';
import { User } from '../../../domain';
import { UserSignUpErrors } from './UserSignUpError';

export type UserSignUpResponse =
  | User
  | UserSignUpErrors.EmailError
  | UserSignUpErrors.PasswordError
  | AppError.UnexpectedError;
