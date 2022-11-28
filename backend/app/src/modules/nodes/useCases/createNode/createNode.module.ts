// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { CreateNodeController } from './createNode.controller';

@Module({
  imports: [],
  controllers: [CreateNodeController],
})
export class CreateNodeModule {}
