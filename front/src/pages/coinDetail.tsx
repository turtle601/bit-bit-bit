import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ThemeProps } from '../types/types';

import { fetchCoinIdApi, fetchCoinPriceApi } from '../api/api';

import { Container } from '../layout/layout';

import Title from '../components/Title';

const CoinDetail = ({ theme, toggleTheme }: ThemeProps) => {
  const { coinId } = useParams();

  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});

  useEffect(() => {
    (async () => {
      const apiCoinId = await fetchCoinIdApi(coinId);
      const apiCoinPrice = await fetchCoinPriceApi(coinId);

      setInfo(apiCoinId);
      setPrice(apiCoinPrice);
    })();
  }, [coinId]);

  return (
    <Container>
      <Title theme={theme} toggleTheme={toggleTheme} name={coinId} />
      <div>{JSON.stringify(info)}</div>
      <div>{JSON.stringify(price)}</div>
    </Container>
  );
};

export default CoinDetail;
