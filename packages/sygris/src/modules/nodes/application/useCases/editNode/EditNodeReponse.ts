import { AppError } from '../../../../../shared';
import { Node } from '../../../domain';
import { EditNodeErrors } from './EditNodeErrors';

export type EditNodeResponse =
  | Node
  | EditNodeErrors.ErrorEditingNode
  | AppError.UnexpectedError;
