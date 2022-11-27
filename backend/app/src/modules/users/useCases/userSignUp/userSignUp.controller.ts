// Dependencies
import { Body, Controller, Post } from '@nestjs/common';
import {
  userService,
  UserSignUpResponse,
  UserAuthDTO,
  UserSignInDTO,
  UserSignInResponse,
} from '@sygris/core';

@Controller('users/signup')
export class UserSignUpController {
  @Post()
  signUp(
    @Body() req: UserSignInDTO,
  ): Promise<UserAuthDTO | UserSignUpResponse | UserSignInResponse> {
    return userService.signUpAndSignIn(req);
  }
}
