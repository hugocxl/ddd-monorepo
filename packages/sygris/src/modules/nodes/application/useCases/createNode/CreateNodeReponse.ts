import { AppError } from '../../../../../shared';
import { Node } from '../../../domain';
import { CreateNodeErrors } from './CreateNodeErrors';

export type CreateNodeResponse =
  | Node
  | CreateNodeErrors.ErrorCreatingNode
  | AppError.UnexpectedError;
