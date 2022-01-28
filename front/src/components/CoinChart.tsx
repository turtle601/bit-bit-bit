import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styled, { css } from 'styled-components';

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
      console.log(chartData);
      setChartItem(chartData);
      setLoading(false);
    })();
  }, [coinId]);
  return (
    <Section>
      {loading ? (
        'Loading chart...'
      ) : (
        <Chart
          type="line"
          series={[
            {
              name: 'Price',
              data: chartdataList?.map((price) => price.open),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 300,
              width: '100%',
              toolbar: {
                show: true,
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
              axisBorder: { show: true },
              axisTicks: { show: true },
              labels: { show: true },
              type: 'datetime',
              categories: chartdataList?.map((price) => price.time_open),
              title: {
                text: 'Latest 2 Week',
              },
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#0fbcf9'],
          }}
        />
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 50vw;
`;

export default CoinChart;
