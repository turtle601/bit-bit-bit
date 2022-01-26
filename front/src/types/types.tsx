export interface TitleType {
  name?: string;
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}
