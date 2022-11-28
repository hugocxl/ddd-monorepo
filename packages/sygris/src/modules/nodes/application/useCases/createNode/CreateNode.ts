import { CreateNodeErrors } from './CreateNodeError';
import { CreateNodeResponse } from './CreateNodeReponse';
import { CreateNodeRequest } from './CreateNodeRequest';
import {
  UseCase,
  AppError,
  Result,
  SwaggerAdapter,
} from '../../../../../shared';

export class CreateNode
  implements UseCase<CreateNodeRequest, Promise<Result<CreateNodeResponse>>>
{
  private swagger: SwaggerAdapter;

  public constructor(swagger: SwaggerAdapter) {
    this.swagger = swagger;
  }

  async execute(req: CreateNodeRequest): Promise<Result<CreateNodeResponse>> {
    try {
      const nodeResult = await this.swagger.createNode(req);

      if (nodeResult.isFailure) {
        return Result.fail<CreateNodeErrors.ErrorCreatingNode>(
          new CreateNodeErrors.ErrorCreatingNode(
            nodeResult.getError().toString(),
          ),
        );
      }

      // @ts-expect-error
      return nodeResult;
    } catch (err) {
      return Result.fail(new AppError.UnexpectedError(err));
    }
  }
}
