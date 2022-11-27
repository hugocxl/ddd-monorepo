import { SwaggerService } from '../../../../../shared';
import { UserSignUp } from './UserSignUp';

const userSignUp = new UserSignUp(SwaggerService);

export { userSignUp, UserSignUp };

export * from './UserSignUpDTO';
export * from './UserSignUpError';
export * from './UserSignUpReponse';
