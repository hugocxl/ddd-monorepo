import { AppError } from '../../../../../shared';
import { Nodes } from '../../../domain';
import { GetNodesErrors } from './GetNodesError';

export type GetNodesResponse =
  | Nodes
  | GetNodesErrors.ErrorReadingNodes
  | AppError.UnexpectedError;
