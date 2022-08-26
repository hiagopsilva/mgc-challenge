import { createContext, ReactNode } from 'react';

import { Storage } from '~/services';
import { UserAPI } from '~/services/API';
import { alert } from '~/utils';

export const AuthContext = createContext({} as UserType.AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  let isAuthenticated = false;
  let name = 'admin';

  const signIn = async (authFormData: UserType.Login) => {
    try {
      await UserAPI.Auth({
        user: authFormData.email,
        password: authFormData.password,
      });

      Storage.setToken(authFormData.email);
      isAuthenticated = true;
      name = authFormData.email;
      name = authFormData.email;

      return true;
    } catch (error) {
      console.log(error);
      alert({ message: 'Ocorreu um erro!', type: 'error' });

      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, name }}>
      {children}
    </AuthContext.Provider>
  );
}
