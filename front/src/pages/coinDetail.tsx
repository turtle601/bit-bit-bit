import React, { useEffect, useState } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';

import { ThemeProps, InfoType, PriceType } from '../types/types';

import { fetchCoinIdApi, fetchCoinPriceApi } from '../api/api';

import { Container } from '../layout/layout';

import { Tabs, Tab } from '../styles/custom';

import Title from '../components/Title';
import CoinInfo from '../components/CoinInfo';
import CoinChart from '../components/CoinChart';
import CoinPriceChart from '../components/CoinPriceChart';

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
    <>
      <Container>
        <Title theme={theme} toggleTheme={toggleTheme} name={coinId} />
        {loading ? <div>Loading</div> : <CoinInfo info={info} price={price} />}
        <Tabs>
          <Tab>Chart</Tab>
          <Tab>Price</Tab>
        </Tabs>
        <Routes>
          <Route path="chart" element={<CoinChart />} />
          <Route path="price" element={<CoinPriceChart />} />
        </Routes>
      </Container>
    </>
  );
};

export default CoinDetail;
