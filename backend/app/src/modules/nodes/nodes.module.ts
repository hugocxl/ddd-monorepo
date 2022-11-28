// Dependencies
import { Module } from '@nestjs/common';

// Modules
import {
  GetNodesModule,
  CreateNodeModule,
  DeleteNodeModule,
  EditNodeModule,
} from './useCases';

@Module({
  imports: [GetNodesModule, CreateNodeModule, DeleteNodeModule, EditNodeModule],
})
export class NodesModule {}
