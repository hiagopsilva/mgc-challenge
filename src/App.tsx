/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import Routes from '~/routes';
import store from '~/stores';
import {
  breakpoints,
  colors,
  radius,
  spacings,
  global as GlobalStyles,
} from '~/theme';

import { Toastify } from './utils/modules';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const routing = syncHistoryWithStore(browserHistory, routingStore);

const stores = { ...store, routing };
const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...breakpoints,
};

const App: React.FC = () => (
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <Router history={routing}>
        <Toastify.ToastContainer />

        <Routes />
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);

export default App;
