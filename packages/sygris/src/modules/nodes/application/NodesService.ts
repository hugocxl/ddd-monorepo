import { Nodes } from '../domain';
import { Result } from '../../../shared';
import { GetNodes, GetNodesRequest, GetNodesResponse } from './useCases';

export class NodesService {
  constructor(private readonly getNodes: GetNodes) {
    this.getNodes = getNodes;
  }

  async getAll(req: GetNodesRequest): Promise<Nodes | GetNodesResponse> {
    const nodesOrError: Result<GetNodesResponse> = await this.getNodes.execute(
      req,
    );

    if (nodesOrError.isFailure) {
      return nodesOrError.getError() as GetNodesResponse;
    }

    return nodesOrError.getValue();
  }
}
