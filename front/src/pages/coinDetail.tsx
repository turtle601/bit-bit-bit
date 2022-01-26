import React from 'react';
import { useParams } from 'react-router-dom';

import { ThemeProps } from '../types/types';
import { Container } from '../layout/layout';

import Title from '../components/Title';

const CoinDetail = ({ theme, toggleTheme }: ThemeProps) => {
  const { coinId } = useParams<string>();

  return (
    <Container>
      <Title theme={theme} toggleTheme={toggleTheme} name={coinId} />
    </Container>
  );
};

export default CoinDetail;
