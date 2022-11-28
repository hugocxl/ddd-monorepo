// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { GetNodesModule, CreateNodeModule } from './useCases';

@Module({
  imports: [GetNodesModule, CreateNodeModule],
})
export class NodesModule {}
