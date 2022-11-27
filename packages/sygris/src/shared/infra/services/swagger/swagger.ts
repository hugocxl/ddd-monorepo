import fetch from 'cross-fetch';
import { User, UserSignInDTO, UserToken } from '../../../../modules';
import { Result } from '../../../core';

const BASE_URL = 'http://20.31.205.253';

export class SwaggerService {
  public static async userSignUp(req: UserSignInDTO): Promise<Result<User>> {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/user`, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.id) {
        return Result.fail<User>(
          `[Swagger: userSignUp]: Error when signin up in Swagger: ${json.message}`,
        );
      }

      return Result.ok<User>(json);
    } catch (err) {
      return Result.fail<User>(
        `[Swagger: userSignUp]: Error when signin up in Swagger: ${err}`,
      );
    }
  }

  public static async userSignIn(
    req: UserSignInDTO,
  ): Promise<Result<UserToken>> {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.access_token) {
        return Result.fail<UserToken>(
          `[Swagger: userSignUp]: Error when signin in Swagger: ${json.message}`,
        );
      }

      return Result.ok<UserToken>(json.access_token);
    } catch (err) {
      return Result.fail<UserToken>(
        `[Swagger: userSignUp]: Error when signin up in Swagger: ${err}`,
      );
    }
  }
}
