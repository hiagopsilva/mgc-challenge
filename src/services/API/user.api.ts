import { request } from '~/services';

class UserAPI {
  static Auth = async (): Promise<any> => {
    const { data } = await request.post('/auth');
    return data;
  };
}
export default UserAPI;
