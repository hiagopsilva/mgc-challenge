import { action, makeObservable, observable } from 'mobx';

import { UserAPI } from '~/services/API';
import { alert } from '~/utils';

export default class FilmStore {
  @observable
  data: any[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  list = async (): Promise<boolean | null> => {
    try {
      const response = await UserAPI.Auth();

      if (response) {
        this.data = [...this.data, ...response];

        return true;
      }

      return null;
    } catch (error) {
      alert({ message: `Desculpe, ocorreu um erro!`, type: 'error' });
      return null;
    }
  };
}
