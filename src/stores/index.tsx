import { create } from 'mobx-persist';
import { RouterStore } from 'mobx-react-router';

import UserStore from './user.store';

class RootStore {
  user: UserStore;

  constructor() {
    this.user = new UserStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('film', store.user);

export { RouterStore, UserStore };
export default store;
