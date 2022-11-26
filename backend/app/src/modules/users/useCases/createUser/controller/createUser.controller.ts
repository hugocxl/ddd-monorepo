// Dependencies
import { Controller, Get } from '@nestjs/common';

// Service
import { createUserUseCase } from '@sygris/core';

@Controller('users')
export class CreateUserController {
  @Get()
  getHello(): Promise<any> {
    return createUserUseCase.execute({
      email: 'hugo@test8.com',
      password: '1234asdfasdf',
    });
  }
}
