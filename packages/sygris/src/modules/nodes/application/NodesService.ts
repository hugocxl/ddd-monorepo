import { Nodes } from '../domain';
import { Result } from '../../../shared';
import {
  CreateNode,
  CreateNodeRequest,
  CreateNodeResponse,
  DeleteNode,
  DeleteNodeRequest,
  DeleteNodeResponse,
  EditNode,
  EditNodeRequest,
  EditNodeResponse,
  GetNodes,
  GetNodesRequest,
  GetNodesResponse,
} from './useCases';

export class NodesService {
  constructor(
    private readonly getNodes: GetNodes,
    private readonly createNode: CreateNode,
    private readonly deleteNode: DeleteNode,
    private readonly editNode: EditNode,
  ) {
    this.getNodes = getNodes;
    this.createNode = createNode;
    this.deleteNode = deleteNode;
    this.editNode = editNode;
  }

  async get(req: GetNodesRequest): Promise<Nodes | GetNodesResponse> {
    const nodesOrError: Result<GetNodesResponse> = await this.getNodes.execute(
      req,
    );

    if (nodesOrError.isFailure) {
      return nodesOrError.getError() as GetNodesResponse;
    }

    return nodesOrError.getValue();
  }

  async create(req: CreateNodeRequest): Promise<CreateNodeResponse> {
    const nodeOrError: Result<CreateNodeResponse> =
      await this.createNode.execute(req);

    if (nodeOrError.isFailure) {
      return nodeOrError.getError() as CreateNodeResponse;
    }

    return nodeOrError.getValue();
  }

  async delete(req: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    const nodeOrError: Result<DeleteNodeResponse> =
      await this.deleteNode.execute(req);

    if (nodeOrError.isFailure) {
      return nodeOrError.getError() as DeleteNodeResponse;
    }

    return;
  }

  async edit(req: EditNodeRequest): Promise<EditNodeResponse> {
    const nodeOrError: Result<EditNodeResponse> = await this.editNode.execute(
      req,
    );

    if (nodeOrError.isFailure) {
      return nodeOrError.getError() as EditNodeResponse;
    }

    return nodeOrError.getValue();
  }
}
