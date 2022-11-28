import { NodesService } from './NodesService';
import { getNodes, createNode, deleteNode } from './useCases';

const nodesService = new NodesService(getNodes, createNode, deleteNode);

export { nodesService, NodesService };

export * from './useCases';
