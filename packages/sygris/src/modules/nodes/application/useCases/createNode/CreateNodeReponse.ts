import { AppError } from '../../../../../shared';
import { Node } from '../../../domain';
import { CreateNodeErrors } from './CreateNodeError';

export type CreateNodeResponse =
  | Node
  | CreateNodeErrors.ErrorCreatingNode
  | AppError.UnexpectedError;
