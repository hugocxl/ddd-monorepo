import { SwaggerService } from '../../../../../shared';
import { GetNodes } from './GetNodes';

const getNodes = new GetNodes(SwaggerService);

export { getNodes, GetNodes };

export * from './GetNodesError';
export * from './GetNodesReponse';
export * from './GetNodesRequest';
