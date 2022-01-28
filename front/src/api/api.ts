export const fetchCoinsApi = async () => {
  const response = await fetch('https://api.coinpaprika.com/v1/coins');
  const fetchCoinData = await response.json();
  return fetchCoinData;
};

export const fetchCoinIdApi = async <T>(coinId: T) => {
  const response = await fetch(
    `https://api.coinpaprika.com/v1/coins/${coinId}`,
  );
  const fetchCoinId = await response.json();
  return fetchCoinId;
};

export const fetchCoinPriceApi = async <T>(coinId: T) => {
  const response = await fetch(
    `https://api.coinpaprika.com/v1/tickers/${coinId}`,
  );
  const fetchCoinPrice = await response.json();
  return fetchCoinPrice;
};

export const fetchCoinChartApi = async <T>(coinId: T) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;

  const response = await fetch(
    `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`,
  );
  const fetchCoinChart = await response.json();
  return fetchCoinChart;
};
