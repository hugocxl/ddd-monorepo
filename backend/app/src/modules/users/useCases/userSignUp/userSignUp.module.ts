// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { UserSignUpController } from './userSignUp.controller';

@Module({
  imports: [],
  controllers: [UserSignUpController],
})
export class UserSignUpModule {}
