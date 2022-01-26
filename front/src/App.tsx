import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

import { useDarkMode } from './hooks/useDarkMode';

import Coins from './pages/coins';
import Coin from './pages/coin';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Coins theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/:coinId"
          element={<Coin theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
