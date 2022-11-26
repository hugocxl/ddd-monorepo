// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { CreateUserController } from './controller';

@Module({
  imports: [],
  controllers: [CreateUserController],
})
export class CreateUserModule {}
