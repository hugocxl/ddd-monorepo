import { SwaggerService } from '../../../../../shared';
import { EditNode } from './EditNode';

const editNode = new EditNode(SwaggerService);

export { editNode, EditNode };

export * from './EditNodeErrors';
export * from './EditNodeReponse';
export * from './EditNodeRequest';
