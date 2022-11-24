// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Controller
import { UserLoginController } from './userLogin.controller';

// Service
import { UserLoginService } from '../service/users.service';

describe('UserLoginController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserLoginController],
      providers: [UserLoginService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(UserLoginController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
