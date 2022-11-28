// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { DeleteNodeController } from './deleteNode.controller';

@Module({
  imports: [],
  controllers: [DeleteNodeController],
})
export class DeleteNodeModule {}
