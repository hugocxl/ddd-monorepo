// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { GetNodesModule, CreateNodeModule, DeleteNodeModule } from './useCases';

@Module({
  imports: [GetNodesModule, CreateNodeModule, DeleteNodeModule],
})
export class NodesModule {}
