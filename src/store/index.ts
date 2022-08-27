/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable default-param-last */
/* eslint-disable-next-line no-return-assign */

import { configureStore } from '@reduxjs/toolkit';

function counterReducer(state = { name: '' }, action: any) {
  switch (action.type) {
    case 'getName':
      return { name: (state.name = 'Hiago 2') };
    case 'setName':
      return { name: (state.name = 'Daniella') };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    user: counterReducer,
    user2: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
