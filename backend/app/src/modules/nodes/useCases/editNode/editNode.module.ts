// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { EditNodeController } from './editNode.controller';

@Module({
  imports: [],
  controllers: [EditNodeController],
})
export class EditNodeModule {}
