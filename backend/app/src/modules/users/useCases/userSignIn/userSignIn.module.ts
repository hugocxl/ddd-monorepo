// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { UserSignInController } from './userSignIn.controller';

@Module({
  imports: [],
  controllers: [UserSignInController],
})
export class UserSignInModule {}
