import { UserEmail, UserPassword } from '../../../domain';

export interface UserSignInDTO {
  email: UserEmail;
  password: UserPassword;
}
