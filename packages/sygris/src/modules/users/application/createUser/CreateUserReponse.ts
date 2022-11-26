import { AppError } from '../../../../shared';
import { User } from '../../domain';
import { CreateUserErrors } from './CreateUserError';

export type CreateUserResponse =
  | User
  | CreateUserErrors.EmailError
  | CreateUserErrors.PasswordError
  | AppError.UnexpectedError;
