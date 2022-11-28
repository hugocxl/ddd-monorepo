import { UserToken } from '../../../../users';
import { NodeID } from '../../../domain';

export interface DeleteNodeRequest {
  id: NodeID;
  token: UserToken;
}
