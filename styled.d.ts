import 'styled-components';

interface Colors {
  fg: string;
  bg: string;
  trim: string;
  hl: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    bodyColor: string;
    textColor: string;
    palette: {
      common: {
        black: string;
        white: string;
      };

      primary: Colors;
      secondary: Colors;
    };
  }
}
