import { UserToken } from '../../../../users';
import { NodeID, NodeName, NodeParentID } from '../../../domain';

export interface EditNodeRequest {
  id: NodeID;
  name: NodeName;
  parentId: NodeParentID;
  token: UserToken;
}
