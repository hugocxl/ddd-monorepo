import { NodesService } from './NodesService';
import { getNodes, createNode } from './useCases';

const nodesService = new NodesService(getNodes, createNode);

export { nodesService, NodesService };

export * from './useCases';
