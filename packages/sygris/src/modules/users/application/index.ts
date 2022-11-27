import { UserService } from './UserService';
import { userSignUp } from './useCases';

const userService = new UserService(userSignUp);

export { userService, UserService };

export * from './DTOs';
export * from './useCases';
export * from './mappers';
