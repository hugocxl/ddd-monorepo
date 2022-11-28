import { Adapter, SwaggerService } from '../infra';
import { Result } from '../core';
import {
  CreateNodeRequest,
  DeleteNodeRequest,
  GetNodesRequest,
  Nodes,
} from '../../modules';
import {
  User,
  UserSignInDTO,
  UserSignUpDTO,
  UserToken,
} from '../../modules/users';

export interface SwaggerAdapter extends Adapter<SwaggerService> {
  userSignUp: (req: UserSignUpDTO) => Promise<Result<User>>;
  userSignIn: (req: UserSignInDTO) => Promise<Result<UserToken>>;
  getNodes: (req: GetNodesRequest) => Promise<Result<Nodes>>;
  createNode: (req: CreateNodeRequest) => Promise<Result<Node>>;
  deleteNode: (req: DeleteNodeRequest) => Promise<Result<void>>;
}
