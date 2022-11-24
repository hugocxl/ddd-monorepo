// Dependenciess
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserLoginService {
  getHello(): string {
    return 'Hello World!';
  }
}
