import { DefaultTheme } from 'styled-components';

const margins = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const paddings = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: '1.2rem',
    base: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  white: '#fff',
  darkWhite: '#f0f0f0',
  red: '#ff4d4d',
  yellow: '#ffff4d',
  blue: '#0099ff',

  dark: '#333',
  light: '#fff',
};

// 테마에 따라 다른 값을 갖는 색상 값입니다
const lightThemeColors = {
  ...colors,
  primary: '#22b8cf',
  bgColor: colors.white,
  textColor: colors.dark,
};

const darkThemeColors = {
  ...colors,
  primary: '#22b8cf',
  bgColor: colors.dark,
  textColor: colors.white,
};

// 테마와 관련없이 공통으로 사용되는 변수들입니다
const defalutTheme = {
  margins,
  paddings,
  fonts,
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
export const darkTheme: DefaultTheme = {
  ...defalutTheme,
  color: darkThemeColors,
};

export const lightTheme: DefaultTheme = {
  ...defalutTheme,
  color: lightThemeColors,
};
