import { Adapter, Result, SwaggerService } from '../../../shared';
import { User, UserToken } from '../domain';
import { UserSignInDTO, UserSignUpDTO } from './useCases';

export interface SwaggerAdapter extends Adapter<SwaggerService> {
  userSignUp: (req: UserSignUpDTO) => Promise<Result<User>>;
  userSignIn: (req: UserSignInDTO) => Promise<Result<UserToken>>;
}
