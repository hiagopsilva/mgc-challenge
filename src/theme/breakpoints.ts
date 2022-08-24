import Spacings from './spacings';

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
} as Breakpoints;

export default {
  inMobile: `(max-width: 767px )`,
  inTablet: `(min-width: ${breakpoints.tablet}) and (max-width: 1023px )`,
  inDesktop: `(min-width: ${breakpoints.desktop})`,
  inMobileAndTablet: `(max-width: ${breakpoints.desktop})`,
  inSmallMobile: `(min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.tablet})`,
  inExtraSmallMobile: `(max-width: ${breakpoints.xs})`,
} as TypeDevice;

function toInt(value: string): number {
  // eslint-disable-next-line radix
  return parseInt(value.split('px')[0]);
}

export const device = {
  isMobile: toInt(breakpoints.tablet) >= Spacings.screenWidth,
  isTablet:
    toInt(breakpoints.tablet) > Spacings.screenWidth &&
    toInt(breakpoints.desktop) < Spacings.screenWidth,
  isDesktop: toInt(breakpoints.desktop) >= Spacings.screenWidth,
} as DeviceType;
