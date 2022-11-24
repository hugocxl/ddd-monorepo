// Dependencies
import { Controller, Get } from '@nestjs/common';

// Service
import { UserLoginService } from '../service';

@Controller('users')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Get()
  getHello(): string {
    return this.userLoginService.getHello();
  }
}
