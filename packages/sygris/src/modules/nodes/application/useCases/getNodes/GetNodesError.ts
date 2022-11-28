import { Error } from '../../../../../shared';

export namespace GetNodesErrors {
  export class ErrorReadingNodes extends Error {
    constructor(error: string) {
      super(`There was an error reading nodes: ${error}`);
    }
  }
}
