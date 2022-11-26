import fetch from 'cross-fetch';
import { User, UserEmail, UserPassword } from '../../../../modules';

const BASE_URL = 'http://20.31.205.253';

export const SwaggerService = {
  createUser: async (
    email: UserEmail,
    password: UserPassword,
  ): Promise<User | null> => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/user`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    } catch (err) {
      return null;
    }
  },
};
