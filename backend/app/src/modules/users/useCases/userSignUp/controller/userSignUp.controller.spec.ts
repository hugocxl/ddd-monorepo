// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Controller
import { UserSignUpController } from './userSignUp.controller';

describe('UserSignUpController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UserSignUpController],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(UserSignUpController);
      expect(appController.signup()).toBe('Hello World!');
    });
  });
});
