import { SwaggerService } from '../../../shared';
import { User } from '../domain';
import { CreateUser } from './createUser';
import { UserDTO } from './dtos';
import { UserMapper } from './mappers';

export class UserService {
  constructor(private readonly createUser: CreateUser) {
    this.createUser = new CreateUser(SwaggerService);
  }

  async create(req): Promise<UserDTO> {
    const user: User = await this.createUser.execute(req);

    const userDTO = UserMapper.toDTO(user);

    return userDTO;
  }
}
