import { UserEmail, UserPassword } from '../../../domain';

export interface UserSignUpDTO {
  email: UserEmail;
  password: UserPassword;
}
