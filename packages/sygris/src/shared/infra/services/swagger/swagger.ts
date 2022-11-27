import fetch from 'cross-fetch';
import { User, UserEmail, UserPassword } from '../../../../modules';
import { Result } from '../../../core';

const BASE_URL = 'http://20.31.205.253';

export class SwaggerService {
  constructor() {}

  userSignUp = async (
    email: UserEmail,
    password: UserPassword,
  ): Promise<Result<User>> => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/user`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
  };
}
