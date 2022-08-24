import { get } from 'lodash';

export const pxToRem = (pixels: number, baseline = 16): string =>
  `${pixels / baseline}rem`;

export const getTheme =
  (themeProp: string) =>
  ({ theme }: any): string =>
    get(theme, themeProp);
