import { type ColorPalettes, type Colors, type Fonts } from 'styled-components';

export interface StyledOptions {
  $colorPalette: ColorPalettes;
  $color: keyof Colors;
  $shadow: keyof Colors;
  $font: Fonts;
  $size: `${string}px` | `${string}em` | `${string}rem` | 'initial' | 'inherit' | 'unset';
  $align: 'center' | 'left' | 'right' | string;
  $flex: string | '1 1 auto';
}
