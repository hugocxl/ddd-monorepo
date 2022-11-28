import { UserToken } from '../../../../users';
import { NodeName, NodeParentId } from '../../../domain';

export interface CreateNodeRequest {
  name: NodeName;
  parentId: NodeParentId;
  token: UserToken;
}
