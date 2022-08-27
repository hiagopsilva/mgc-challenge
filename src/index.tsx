import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import Routes from '~/routes';
import store from '~/store';
import {
  breakpoints,
  colors,
  radius,
  spacings,
  global as GlobalStyles,
} from '~/theme';

import { AuthProvider } from './contexts/auth';
import { Toastify } from './utils/modules';

const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...breakpoints,
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <AuthProvider> */}
    <Provider store={store}>
      <Toastify.ToastContainer />

      <Routes />
    </Provider>
    {/* </AuthProvider> */}
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
);
