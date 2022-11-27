import { UseCase, AppError, Result } from '../../../../../shared';
import { SwaggerAdapter } from '../../ports';
import { UserSignInDTO } from './UserSignInDTO';
import { UserSignInErrors } from './UserSignInError';
import { UserSignInResponse } from './UserSignInReponse';

export class UserSignIn
  implements UseCase<UserSignInDTO, Promise<Result<UserSignInResponse>>>
{
  private swagger: SwaggerAdapter;

  constructor(swagger: SwaggerAdapter) {
    this.swagger = swagger;
  }

  async execute(request: UserSignInDTO): Promise<Result<UserSignInResponse>> {
    try {
      const { password, email } = request;

      if (!password) {
        return Result.fail<UserSignInErrors.PasswordError>(
          new UserSignInErrors.PasswordError(password),
        );
      }

      if (!email) {
        return Result.fail<UserSignInErrors.EmailError>(
          new UserSignInErrors.EmailError(email),
        );
      }

      const userResult = await this.swagger.userSignIn(request);

      if (userResult.isFailure) {
        return Result.fail<UserSignInErrors.UserNotLogged>(
          new UserSignInErrors.UserNotLogged(userResult.getError().toString()),
        );
      }

      return userResult;
    } catch (err) {
      return Result.fail(new AppError.UnexpectedError(err));
    }
  }
}
