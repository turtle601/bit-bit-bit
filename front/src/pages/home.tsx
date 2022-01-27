import React, { useState } from 'react';

import { ThemeProps, CoinDataType } from '../types/types';

import Title from '../components/Title';

import { Container } from '../layout/layout';

import CoinList from '../components/CoinList';
import CoinItem from '../components/CoinItem';

const Home = ({ theme, toggleTheme }: ThemeProps) => {
  const [coinDatas, setCoinDatas] = useState<CoinDataType[]>([
    {
      id: 'btc-bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      is_new: false,
      is_active: true,
      type: 'coin',
    },
    {
      id: 'eth-ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      rank: 2,
      is_new: false,
      is_active: true,
      type: 'coin',
    },
    {
      id: 'hex-hex',
      name: 'HEX',
      symbol: 'HEX',
      rank: 3,
      is_new: false,
      is_active: true,
      type: 'token',
    },
  ]);
  return (
    <Container>
      <Title theme={theme} toggleTheme={toggleTheme} />
      <CoinList>
        {coinDatas.map((coinData) => {
          return <CoinItem coinData={coinData} key={coinData.id} />;
        })}
      </CoinList>
    </Container>
  );
};

export default Home;
