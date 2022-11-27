import { UseCase, AppError, Result } from '../../../../../shared';
import { SwaggerService } from '../../ports';
import { UserSignUpDTO } from './UserSignUpDTO';
import { UserSignUpErrors } from './UserSignUpError';
import { UserSignUpResponse } from './UserSignUpReponse';

export class UserSignUp
  implements UseCase<UserSignUpDTO, Promise<Result<UserSignUpResponse>>>
{
  private swaggerService: SwaggerService;

  constructor(swaggerService: SwaggerService) {
    this.swaggerService = swaggerService;
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

      const userResult = await this.swaggerService.userSignUp(
        request.email,
        request.password,
      );

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
