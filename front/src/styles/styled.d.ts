import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    margins: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };

    paddings: {
      sm: string;
      base: string;
      lg: string;
      xl: string;
    };

    fonts: {
      family: {
        base: string;
        title: string;
      };

      size: {
        sm: string;
        base: string;
        lg: string;
        xl: string;
        title: string;
      };

      weight: {
        light: string;
        normal: string;
        bold: string;
      };

      colors: {
        white: string;
        darkWhite: string;
        red: string;
        yellow: string;
        blue: string;
        dark: string;
        light: string;
        primary: string;
        bgColor: string;
        textColor: string;
      };
    };
  }
}
