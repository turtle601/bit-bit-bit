import React, { useEffect, useState } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';

import styled from 'styled-components';
import { ThemeProps, InfoType, PriceType } from '../types/types';

import { fetchCoinIdApi, fetchCoinPriceApi } from '../api/api';

import { Container } from '../layout/layout';

import { Tabs, Tab, LinkStyle } from '../styles/custom';

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
          <Tab>
            <LinkStyleCenter to="chart">Chart</LinkStyleCenter>
          </Tab>
          <Tab>
            <LinkStyleCenter to="price">Price</LinkStyleCenter>
          </Tab>
        </Tabs>
        <Routes>
          <Route path="chart" element={<CoinChart coinId={coinId} />} />
          <Route path="price" element={<CoinPriceChart />} />
        </Routes>
      </Container>
    </>
  );
};

const LinkStyleCenter = styled(LinkStyle)`
  text-align: center;
`;

export default CoinDetail;
