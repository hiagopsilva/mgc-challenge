declare namespace UserType {
  type Login = {
    email: string;
    password: string;
  };

  type AuthForm = {
    user: string;
    password: string;
  };

  type AuthContextData = {
    signIn(credentials: UserType.Login): Promise<boolean>;
    isAuthenticated?: boolean;
    name?: string;
  };
}
