// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { GetNodesController } from './getNodes.controller';

@Module({
  imports: [],
  controllers: [GetNodesController],
})
export class GetNodesModule {}
