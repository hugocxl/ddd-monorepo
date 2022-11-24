// Dependencies
import { Module } from '@nestjs/common';

// Controller
import { UserLoginController } from './controller';

// Service
import { UserLoginService } from './service';

@Module({
  imports: [],
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
