import { NodesService } from './NodesService';
import { getNodes, createNode, deleteNode, editNode } from './useCases';

const nodesService = new NodesService(
  getNodes,
  createNode,
  deleteNode,
  editNode,
);

export { nodesService, NodesService };

export * from './useCases';
