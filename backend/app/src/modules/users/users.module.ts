// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { UserSignUpModule } from './useCases';

@Module({
  imports: [UserSignUpModule],
})
export class UsersModule {}
