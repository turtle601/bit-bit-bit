import React from 'react';

import { ThemeProps } from '../types/types';

import Title from '../components/Title';

import { Container } from '../layout/layout';

const Coins = ({ theme, toggleTheme }: ThemeProps) => {
  return (
    <Container>
      <Title theme={theme} toggleTheme={toggleTheme} />
    </Container>
  );
};

export default Coins;
