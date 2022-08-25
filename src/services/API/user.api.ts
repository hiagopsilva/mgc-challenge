import { request } from '~/services';

class UserAPI {
  static Auth = async (authData: UserType.AuthForm): Promise<any> => {
    const { data } = await request.post('/auth', authData);
    return data;
  };
}
export default UserAPI;
