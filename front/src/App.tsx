import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

import { useDarkMode } from './hooks/useDarkMode';

import Home from './pages/home';
import CoinDetail from './pages/coinDetail';

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/:coinId"
          element={<CoinDetail theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
