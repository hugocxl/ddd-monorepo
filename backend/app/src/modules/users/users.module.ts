// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { CreateUserModule } from './useCases';

@Module({
  imports: [CreateUserModule],
})
export class UsersModule {}
