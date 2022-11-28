import { NodesService } from './NodesService';
import { getNodes } from './useCases';

const nodesService = new NodesService(getNodes);

export { nodesService, NodesService };

export * from './useCases';
