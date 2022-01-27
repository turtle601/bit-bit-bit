import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ThemeProps, InfoType, PriceType } from '../types/types';

import { fetchCoinIdApi, fetchCoinPriceApi } from '../api/api';

import { Container } from '../layout/layout';

import Title from '../components/Title';
import CoinInfo from '../components/CoinInfo';

const CoinDetail = ({ theme, toggleTheme }: ThemeProps) => {
  const { coinId } = useParams();

  const [info, setInfo] = useState<InfoType>();
  const [price, setPrice] = useState<PriceType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const apiCoinId = await fetchCoinIdApi(coinId);
      const apiCoinPrice = await fetchCoinPriceApi(coinId);

      setInfo(apiCoinId);
      setPrice(apiCoinPrice);

      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Title theme={theme} toggleTheme={toggleTheme} name={coinId} />
      {loading ? <div>Loading</div> : <CoinInfo info={info} price={price} />}
    </Container>
  );
};

export default CoinDetail;
