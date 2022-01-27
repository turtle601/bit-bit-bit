import React, { useEffect } from 'react';

import { fetchCoinChartApi } from '../api/api';

interface CoinIdProps {
  coinId: string | undefined;
}

const CoinChart = ({ coinId }: CoinIdProps) => {
  useEffect(() => {
    (async () => {
      const chartData = await fetchCoinChartApi(coinId);
      console.log(chartData);
    })();
  }, [coinId]);
  return <>CoinChart</>;
};

export default CoinChart;
