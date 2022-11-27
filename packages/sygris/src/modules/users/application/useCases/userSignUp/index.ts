import { SwaggerService } from '../../../../../shared';
import { UserSignUp } from './UserSignUp';

const swaggerService = new SwaggerService();
const userSignUp = new UserSignUp(swaggerService);

export { userSignUp, UserSignUp };

export * from './UserSignUpDTO';
export * from './UserSignUpError';
export * from './UserSignUpReponse';
