export interface TitleType {
  name?: string;
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export interface CoinDataType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: false;
  is_active: boolean;
  type: string;
}

export interface CoinDataProps {
  coinData: CoinDataType;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
