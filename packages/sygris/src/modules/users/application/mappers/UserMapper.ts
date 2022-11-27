import { Adapter } from '../../../../shared/infra/Adapter';
import { User, UserEmail, UserToken } from '../../domain';
import { UserAuthDTO, UserDTO } from '../DTOs';

export class UserMapper implements Adapter<User> {
  public static toDTO(user: User): UserDTO {
    return {
      email: user.email,
    };
  }

  public static toAuthDTO(email: UserEmail, token: UserToken): UserAuthDTO {
    return {
      email,
      token,
    };
  }

  public static toDomain(raw: any): User {
    return {
      email: raw.email,
      password: raw.password,
      id: raw.id,
    };
  }
}
