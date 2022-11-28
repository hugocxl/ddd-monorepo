import { AppError } from '../../../../../shared';
import { DeleteNodeErrors } from './DeleteNodeErrors';

export type DeleteNodeResponse =
  | void
  | DeleteNodeErrors.ErrorDeletingNode
  | AppError.UnexpectedError;
