import { DeleteNodeErrors } from './DeleteNodeErrors';
import { DeleteNodeResponse } from './DeleteNodeReponse';
import { DeleteNodeRequest } from './DeleteNodeRequest';
import {
  UseCase,
  AppError,
  Result,
  SwaggerAdapter,
} from '../../../../../shared';

export class DeleteNode
  implements UseCase<DeleteNodeRequest, Promise<Result<DeleteNodeResponse>>>
{
  private swagger: SwaggerAdapter;

  public constructor(swagger: SwaggerAdapter) {
    this.swagger = swagger;
  }

  async execute(req: DeleteNodeRequest): Promise<Result<DeleteNodeResponse>> {
    try {
      const nodeResult = await this.swagger.deleteNode(req);

      if (nodeResult.isFailure) {
        return Result.fail<DeleteNodeErrors.ErrorDeletingNode>(
          new DeleteNodeErrors.ErrorDeletingNode('Error deleting node'),
        );
      }

      return nodeResult;
    } catch (err) {
      return Result.fail(new AppError.UnexpectedError(err));
    }
  }
}
