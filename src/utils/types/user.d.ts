declare namespace UserType {
  type Login = {
    user: string;
    password: string;
  };

  type AuthForm = {
    user: string;
    password: string;
  };

  type AuthContextData = {
    isAuthenticated?: boolean;
    name?: string;
    signIn(credentials: UserType.Login): Promise<boolean>;
  };
}
