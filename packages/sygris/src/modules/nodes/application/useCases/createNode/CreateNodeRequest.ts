import { UserToken } from '../../../../users';
import { NodeName, NodeParentID } from '../../../domain';

export interface CreateNodeRequest {
  name: NodeName;
  parentId: NodeParentID;
  token: UserToken;
}
