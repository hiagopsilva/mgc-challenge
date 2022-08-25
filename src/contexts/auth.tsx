import { createContext, ReactNode } from 'react';

// import { Storage } from '~/services';
import { UserAPI } from '~/services/API';

export const AuthContext = createContext({} as UserType.AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  let isAuthenticated = false;

  const signIn = async (authFormData: UserType.Login) => {
    const response = await UserAPI.Auth({
      user: authFormData.email,
      pass: authFormData.password,
    });

    console.log(authFormData);
    console.log(response);
    // Storage.setToken('123');
    isAuthenticated = true;

    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
