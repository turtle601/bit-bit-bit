import React, { useState, useEffect } from 'react';

import { ThemeProps, CoinDataType } from '../types/types';
import { fetchCoinsApi } from '../api/api';

import Title from '../components/Title';

import { Container } from '../layout/layout';

import CoinList from '../components/CoinList';
import CoinItem from '../components/CoinItem';

const Home = ({ theme, toggleTheme }: ThemeProps) => {
  const [loading, setLoading] = useState(true);
  const [coinDatas, setCoinDatas] = useState<CoinDataType[]>([]);

  useEffect(() => {
    (async () => {
      const coins = await fetchCoinsApi();
      setCoinDatas(coins);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Title theme={theme} toggleTheme={toggleTheme} />
      {loading ? (
        <div>Loading</div>
      ) : (
        <CoinList>
          {coinDatas.map((coinData) => {
            return <CoinItem coinData={coinData} key={coinData.id} />;
          })}
        </CoinList>
      )}
    </Container>
  );
};

export default Home;
