import { NodeID } from './NodeID';
import { NodeName } from './NodeName';
import { NodeParentID } from './NodeParentID';

export interface Node {
  id: NodeID;
  name: NodeName;
  parentId: NodeParentID;
}
