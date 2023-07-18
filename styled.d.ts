import 'styled-components';

declare module 'styled-components' {
  interface CommonColors {
    black?: string;
    white?: string;
  }

  interface Colors extends CommonColors {
    readonly red: string;
    readonly orange: string;
    readonly blue: string;
    readonly cyan: string;
    readonly green: string;
    readonly drab: string;
    readonly neon: string;
    readonly steel: string;
    readonly tan: string;
    readonly gray: string;
    readonly teal: string;
    readonly yellow: string;
    readonly linear?: string;
    readonly radial?: string;
  }

  type ColorPalettes = 'primary' | 'secondary' | 'tertiary' | 'common';

  interface Breakpoints {
    readonly phone: '480px';
    readonly smallTab: '640px';
    readonly laptop: '768px';
    readonly fullDisplay: '1024px';
    readonly largeDisplay: '1280px';
  }

  export interface DefaultTheme {
    name: 'Default' | string;
    fonts: string[];
    borderRadius: string;
    breakpoints: Breakpoints;

    palette: {
      common: CommonColors;
      primary: Colors;
      secondary: Colors;
      tertiary: Colors;
    };
  }
}
