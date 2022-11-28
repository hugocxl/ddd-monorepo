// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { GetNodesModule } from './useCases';

@Module({
  imports: [GetNodesModule],
})
export class NodesModule {}
