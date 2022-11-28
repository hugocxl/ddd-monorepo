import { Nodes } from '../domain';
import { Result } from '../../../shared';
import {
  CreateNode,
  CreateNodeRequest,
  CreateNodeResponse,
  GetNodes,
  GetNodesRequest,
  GetNodesResponse,
} from './useCases';

export class NodesService {
  constructor(
    private readonly getNodes: GetNodes,
    private readonly createNode: CreateNode,
  ) {
    this.getNodes = getNodes;
    this.createNode = createNode;
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

  async createNew(req: CreateNodeRequest): Promise<CreateNodeResponse> {
    const nodeOrError: Result<CreateNodeResponse> =
      await this.createNode.execute(req);

    if (nodeOrError.isFailure) {
      return nodeOrError.getError() as CreateNodeResponse;
    }

    return nodeOrError.getValue();
  }
}
