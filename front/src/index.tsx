import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';

import { lightTheme, darkTheme } from './styles/theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
