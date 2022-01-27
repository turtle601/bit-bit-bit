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
