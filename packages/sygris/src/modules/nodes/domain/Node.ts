import { NodeName } from './NodeName';
import { NodeParentId } from './NodeParentId';

export interface Node {
  name: NodeName;
  parentId?: NodeParentId;
}
