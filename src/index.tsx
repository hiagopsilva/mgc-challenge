import ReactDOM from 'react-dom';

import 'react-toastify/dist/ReactToastify.css';

import Routes from '~/routes';
import {
  breakpoints,
  colors,
  radius,
  spacings,
  global as GlobalStyles,
} from '~/theme';

import { AuthProvider } from './contexts/auth';
import { Toastify, ThemeProvider } from './utils';

const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...breakpoints,
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Toastify.ToastContainer />

      <Routes />
    </AuthProvider>
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
);
