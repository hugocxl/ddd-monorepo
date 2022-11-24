// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { UserLoginModule } from './useCases';

@Module({
  imports: [UserLoginModule],
})
export class UsersModule {}
