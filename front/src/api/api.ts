export const fetchCoinsApi = async () => {
  const response = await fetch('https://api.coinpaprika.com/v1/coins');
  const fetchCoinData = await response.json();
  return fetchCoinData;
};
