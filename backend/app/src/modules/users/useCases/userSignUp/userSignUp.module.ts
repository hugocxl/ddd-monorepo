// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { UserSignUpController } from './controller';

@Module({
  imports: [],
  controllers: [UserSignUpController],
})
export class UserSignUpModule {}
