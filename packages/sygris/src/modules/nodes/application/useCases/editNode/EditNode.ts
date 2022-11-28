import { EditNodeErrors } from './EditNodeErrors';
import { EditNodeResponse } from './EditNodeReponse';
import { EditNodeRequest } from './EditNodeRequest';
import {
  UseCase,
  AppError,
  Result,
  SwaggerAdapter,
} from '../../../../../shared';

export class EditNode
  implements UseCase<EditNodeRequest, Promise<Result<EditNodeResponse>>>
{
  private swagger: SwaggerAdapter;

  public constructor(swagger: SwaggerAdapter) {
    this.swagger = swagger;
  }

  async execute(req: EditNodeRequest): Promise<Result<EditNodeResponse>> {
    try {
      const nodeResult = await this.swagger.editNode(req);

      if (nodeResult.isFailure) {
        return Result.fail<EditNodeErrors.ErrorEditingNode>(
          new EditNodeErrors.ErrorEditingNode(nodeResult.getError().toString()),
        );
      }

      // @ts-expect-error
      return nodeResult;
    } catch (err) {
      return Result.fail(new AppError.UnexpectedError(err));
    }
  }
}
