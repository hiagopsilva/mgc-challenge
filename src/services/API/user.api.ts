import { request } from '~/services';

class UserAPI {
  static fetch = async (): Promise<any> => {
    const { data } = await request.post('/fetch');
    return data;
  };
}
export default UserAPI;
