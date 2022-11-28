import { GetNodesErrors } from './GetNodesError';
import { GetNodesResponse } from './GetNodesReponse';
import { GetNodesRequest } from './GetNodesRequest';
import {
  UseCase,
  AppError,
  Result,
  SwaggerAdapter,
} from '../../../../../shared';

export class GetNodes
  implements UseCase<GetNodesRequest, Promise<Result<GetNodesResponse>>>
{
  private swagger: SwaggerAdapter;

  constructor(swagger: SwaggerAdapter) {
    this.swagger = swagger;
  }

  async execute(req: GetNodesRequest): Promise<Result<GetNodesResponse>> {
    try {
      const nodesResult = await this.swagger.getNodes(req);

      if (nodesResult.isFailure) {
        return Result.fail<GetNodesErrors.ErrorReadingNodes>(
          new GetNodesErrors.ErrorReadingNodes(
            nodesResult.getError().toString(),
          ),
        );
      }

      return nodesResult;
    } catch (err) {
      return Result.fail(new AppError.UnexpectedError(err));
    }
  }
}
