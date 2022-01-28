import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

import { fetchCoinChartApi } from '../api/api';

import { CoinIdProps, chartDataType } from '../types/types';

const CoinPriceChart = ({ coinId }: CoinIdProps) => {
  const [chartDataList, setChartItem] = useState<chartDataType[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const chartData = await fetchCoinChartApi(coinId);
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
          type="candlestick"
          series={[
            {
              name: 'Price',
              data: chartDataList?.map((chartData) => {
                return {
                  x: chartData.time_open,
                  y: [
                    chartData.open,
                    chartData.high,
                    chartData.low,
                    chartData.close,
                  ],
                };
              }),
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
              foreColor: '#95B0B6',
            },

            grid: { show: true },
            stroke: {
              curve: 'smooth',
              width: 4,
            },

            yaxis: {
              show: false,
            },

            xaxis: {
              type: 'datetime',
            },
          }}
        />
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 50vw;
`;

export default CoinPriceChart;
