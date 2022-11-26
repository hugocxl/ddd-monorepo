// Dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Controller
import { CreateUserController } from './createUser.controller';

describe('CreateUserController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CreateUserController],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(CreateUserController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
