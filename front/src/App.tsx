import React from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

import { useDarkMode } from './hooks/useDarkMode';

import Title from './components/Title';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Title toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
