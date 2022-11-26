import { User, UserEmail, UserPassword } from '../domain';

export interface SwaggerService {
  createUser: (
    email: UserEmail,
    password: UserPassword,
  ) => Promise<User | null>;
}
