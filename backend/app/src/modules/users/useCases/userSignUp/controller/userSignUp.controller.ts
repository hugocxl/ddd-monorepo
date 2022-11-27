// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  userService,
  UserSignUpDTO,
  UserDTO,
  UserSignUpResponse,
} from '@sygris/core';

@Controller('users')
export class UserSignUpController {
  @Post('/signup')
  signup(@Body() user: UserSignUpDTO): Promise<UserDTO | UserSignUpResponse> {
    return userService.signup(user);
  }
}
