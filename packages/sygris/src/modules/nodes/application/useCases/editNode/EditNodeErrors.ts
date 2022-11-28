import { Error } from '../../../../../shared';

export namespace EditNodeErrors {
  export class ErrorEditingNode extends Error {
    constructor(error: string) {
      super(`There was an error editing the node: ${error}`);
    }
  }
}
