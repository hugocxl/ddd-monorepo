import { User, UserToken } from '../domain';
import { UserAuthDTO, UserDTO } from './DTOs';
import { UserMapper } from './mappers';
import { Result } from '../../../shared';
import {
  UserSignIn,
  UserSignInDTO,
  UserSignInResponse,
  UserSignUp,
  UserSignUpDTO,
  UserSignUpResponse,
} from './useCases';

export class UserService {
  constructor(
    private readonly userSignUp: UserSignUp,
    private readonly userSignIn: UserSignIn,
  ) {
    this.userSignUp = userSignUp;
    this.userSignIn = userSignIn;
  }

  async signUp(req: UserSignUpDTO): Promise<UserDTO | UserSignUpResponse> {
    const userOrError: Result<UserSignUpResponse> =
      await this.userSignUp.execute(req);

    if (userOrError.isFailure) {
      return userOrError.getError() as UserSignUpResponse;
    }

    const userDTO: UserDTO = UserMapper.toDTO(userOrError.getValue() as User);

    return userDTO;
  }

  async signIn(req: UserSignInDTO): Promise<UserAuthDTO | UserSignInResponse> {
    const tokenOrError: Result<UserSignInResponse> =
      await this.userSignIn.execute(req);

    if (tokenOrError.isFailure) {
      return tokenOrError.getError() as UserSignInResponse;
    }

    const userAuthDTO: UserAuthDTO = UserMapper.toAuthDTO(
      req.email,
      tokenOrError.getValue() as UserToken,
    );

    return userAuthDTO;
  }

  async signUpAndSignIn(
    req: UserSignUpDTO,
  ): Promise<UserAuthDTO | UserSignInResponse | UserSignUpResponse> {
    await this.signUp(req);
    const userAuth = await this.signIn(req);

    return userAuth;
  }
}
