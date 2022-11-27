// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  userService,
  UserSignInDTO,
  UserDTO,
  UserSignInResponse,
} from '@sygris/core';

@Controller('users/signin')
export class UserSignInController {
  @Post()
  signIn(@Body() user: UserSignInDTO): Promise<UserDTO | UserSignInResponse> {
    return userService.signIn(user);
  }
}
