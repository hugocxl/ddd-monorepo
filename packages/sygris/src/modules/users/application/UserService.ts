import { User } from '../domain';
import { UserSignUp, UserSignUpResponse } from './useCases';
import { UserDTO } from './DTOs';
import { UserMapper } from './mappers';
import { Result } from '../../../shared';

export class UserService {
  constructor(private readonly userSignUp: UserSignUp) {
    this.userSignUp = userSignUp;
  }

  async signup(req): Promise<UserDTO | UserSignUpResponse> {
    const userOrError: Result<UserSignUpResponse> =
      await this.userSignUp.execute(req);

    if (userOrError.isFailure) {
      return userOrError.getError() as UserSignUpResponse;
    }

    const userDTO = UserMapper.toDTO(userOrError.getValue() as User);

    return userDTO;
  }
}
