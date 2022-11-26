import { UserEmail } from './UserEmail';
import { UserPassword } from './UserPassword';
import { UserID } from './UserID';

export interface User {
  email: UserEmail;
  password: UserPassword;
  id: UserID;
}
