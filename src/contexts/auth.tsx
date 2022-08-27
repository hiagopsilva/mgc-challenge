import { createContext, ReactNode } from 'react';

import { Storage } from '~/services';
import { UserAPI } from '~/services/API';
import { alert } from '~/utils';

export const AuthContext = createContext({} as UserType.AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  let isAuthenticated = !!Storage.getToken();
  let name = Storage.getItem('username');

  const signIn = async (authFormData: UserType.Login) => {
    try {
      const response = await UserAPI.Auth({
        user: authFormData.user,
        password: authFormData.password,
      });

      Storage.setToken(response.data.token);
      Storage.setItem('username', authFormData.user);

      isAuthenticated = true;
      name = authFormData.user;

      return true;
    } catch (error) {
      console.log(error);
      alert({ message: 'Ocorreu um erro!', type: 'error' });

      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, name: name || '' }}>
      {children}
    </AuthContext.Provider>
  );
}
