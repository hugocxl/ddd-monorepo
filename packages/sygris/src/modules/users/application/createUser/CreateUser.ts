import { UseCase, AppError } from '../../../../shared';
import { SwaggerService } from '../ports';
import { CreateUserDTO } from './CreateUserDTO';
import { CreateUserErrors } from './CreateUserError';
import { CreateUserResponse } from './CreateUserReponse';

export class CreateUser
  implements UseCase<CreateUserDTO, Promise<CreateUserResponse>>
{
  private swaggerService: SwaggerService;

  constructor(swaggerService: SwaggerService) {
    this.swaggerService = swaggerService;
  }

  async execute(request: CreateUserDTO): Promise<CreateUserResponse> {
    try {
      const { password, email } = request;

      if (!password) {
        return new CreateUserErrors.PasswordError(password);
      }

      if (!email) {
        return new CreateUserErrors.EmailError(email);
      }

      const user = await this.swaggerService.createUser(
        request.email,
        request.password,
      );

      if (!user) {
        return new CreateUserErrors.UserNotCreatedError(user);
      }

      return user;
    } catch (err) {
      return new AppError.UnexpectedError(err);
    }
  }
}
