import fetch from 'cross-fetch';
import {
  CreateNodeRequest,
  GetNodesRequest,
  Nodes,
  User,
  UserSignInDTO,
  UserToken,
} from '../../../../modules';
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

  public static async getNodes(req: GetNodesRequest): Promise<Result<Nodes>> {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/node`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${req.token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!Array.isArray(json)) {
        return Result.fail<Nodes>(
          `[Swagger: userSignUp]: Error when getting nodes in Swagger: ${json.message}`,
        );
      }

      return Result.ok<Nodes>(json);
    } catch (err) {
      return Result.fail<Nodes>(
        `[Swagger: userSignUp]: Error when getting nodes in Swagger: ${err}`,
      );
    }
  }

  public static async createNode({
    token,
    ...req
  }: CreateNodeRequest): Promise<Result<Node>> {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/node`, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!json.id) {
        return Result.fail<Node>(
          `[Swagger: userSignUp]: Error when creating node in Swagger: ${json.message}`,
        );
      }

      return Result.ok<Node>(json);
    } catch (err) {
      return Result.fail<Node>(
        `[Swagger: userSignUp]: Error when creating node in Swagger: ${err}`,
      );
    }
  }
}
