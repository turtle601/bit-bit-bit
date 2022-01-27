import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

import { fetchCoinChartApi } from '../api/api';

import { CoinIdProps } from '../types/types';

interface chartDateType {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const CoinChart = ({ coinId }: CoinIdProps) => {
  const [chartdataList, setChartItem] = useState<chartDateType[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const chartData = await fetchCoinChartApi(coinId);
      setChartItem(chartData);
      setLoading(false);
    })();
  }, [coinId]);
  return (
    <div>
      {loading ? (
        'Loading chart...'
      ) : (
        <Chart
          type="line"
          series={[
            {
              name: 'Price',
              data: chartdataList?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            grid: { show: false },
            stroke: {
              curve: 'smooth',
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </div>
  );
};

export default CoinChart;
