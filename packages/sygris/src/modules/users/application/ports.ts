import { Result } from '../../../shared';
import { User, UserEmail, UserPassword } from '../domain';

export interface SwaggerService {
  userSignUp: (
    email: UserEmail,
    password: UserPassword,
  ) => Promise<Result<User>>;
}
