import { UseCase, AppError, Result } from '../../../../../shared';
import { SwaggerAdapter } from '../../ports';
import { UserSignUpDTO } from './UserSignUpDTO';
import { UserSignUpErrors } from './UserSignUpError';
import { UserSignUpResponse } from './UserSignUpReponse';

export class UserSignUp
  implements UseCase<UserSignUpDTO, Promise<Result<UserSignUpResponse>>>
{
  private swagger: SwaggerAdapter;

  constructor(swagger: SwaggerAdapter) {
    this.swagger = swagger;
  }

  async execute(request: UserSignUpDTO): Promise<Result<UserSignUpResponse>> {
    try {
      const { password, email } = request;

      if (!password) {
        return Result.fail<UserSignUpResponse>(
          new UserSignUpErrors.PasswordError(password),
        );
      }

      if (!email) {
        return Result.fail<UserSignUpResponse>(
          new UserSignUpErrors.EmailError(email),
        );
      }

      const userResult = await this.swagger.userSignUp(request);

      if (userResult.isFailure) {
        return Result.fail(
          new UserSignUpErrors.UserNotCreatedError(
            userResult.getError().toString(),
          ),
        );
      }

      return userResult;
    } catch (err) {
      return Result.fail(new AppError.UnexpectedError(err));
    }
  }
}
