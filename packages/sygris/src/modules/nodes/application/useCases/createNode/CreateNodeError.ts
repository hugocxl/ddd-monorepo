import { Error } from '../../../../../shared';

export namespace CreateNodeErrors {
  export class ErrorCreatingNode extends Error {
    constructor(error: string) {
      super(`There was an error creating the node: ${error}`);
    }
  }
}
