import { UserService } from './UserService';
import { userSignUp, userSignIn } from './useCases';

const userService = new UserService(userSignUp, userSignIn);

export { userService, UserService };

export * from './DTOs';
export * from './useCases';
export * from './mappers';
