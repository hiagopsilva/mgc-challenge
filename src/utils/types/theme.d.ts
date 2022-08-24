declare type SpacingsType = {
  sceneSpacing: string;
  minimumSpacing: string;
  smallSpacing: string;
  mediumSpacing: string;
  largeSpacing: string;
  giantSpacing: string;
  buttonSpacing: string;
  cardSpacing: string;
};

declare type RadiusType = {
  smallRadius: string;
  mediumRadius: string;
  largeRadius: string;
  modalRadius: string;
  buttonRadius: string;
};

declare type ColorUniqueType = {
  light: string;
  main: string;
  dark: string;
  contrast: string;
};

declare type ColorType = {
  failure: string;
  warning: string;
  info: string;
  success: string;
  primary: ColorUniqueType;
  secondary: ColorUniqueType;
  tertiary: ColorUniqueType;
  accent: ColorUniqueType;
  fifth: ColorUniqueType;
  opacity: ColorUniqueType;
};

declare type Spacings = {
  sceneSpacing: string;
  smallSpacing: string;
  mediumSpacing: string;
  largeSpacing: string;
  sectionSpacing: string;
  screenWidth: number;
  screenHeight: number;
};
