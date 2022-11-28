import { SwaggerService } from '../../../../../shared';
import { DeleteNode } from './DeleteNode';

const deleteNode = new DeleteNode(SwaggerService);

export { deleteNode, DeleteNode };

export * from './DeleteNodeErrors';
export * from './DeleteNodeReponse';
export * from './DeleteNodeRequest';
