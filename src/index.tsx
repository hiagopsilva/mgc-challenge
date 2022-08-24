import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import Routes from '~/routes';
import {
  breakpoints,
  colors,
  radius,
  spacings,
  global as GlobalStyles,
} from '~/theme';

import { Home } from './scenes';
import { Toastify } from './utils/modules';

const theme = {
  ...colors,
  ...spacings,
  ...radius,
  ...breakpoints,
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Toastify.ToastContainer />

      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
);
