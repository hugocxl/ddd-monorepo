// Dependencies
import { Module } from '@nestjs/common';

// Modules
import { UserSignInModule, UserSignUpModule } from './useCases';

@Module({
  imports: [UserSignUpModule, UserSignInModule],
})
export class UsersModule {}
