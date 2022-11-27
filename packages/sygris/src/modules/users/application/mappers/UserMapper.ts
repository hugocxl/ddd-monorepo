import { Adapter } from '../../../../shared/infra/Adapter';
import { User } from '../../domain';
import { UserDTO } from '../DTOs';

export class UserMapper implements Adapter<User> {
  public static toDTO(user: User): UserDTO {
    return {
      email: user.email,
      id: user.id,
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
