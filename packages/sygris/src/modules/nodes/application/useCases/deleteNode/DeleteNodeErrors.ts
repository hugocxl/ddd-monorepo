import { Error } from '../../../../../shared';

export namespace DeleteNodeErrors {
  export class ErrorDeletingNode extends Error {
    constructor(error: string) {
      super(`There was an error deleting the node: ${error}`);
    }
  }
}
