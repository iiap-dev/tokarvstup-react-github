const blueShades = {
  DARK_BLUE: '#0A202D',
  BLUE: '#293C49',
  LIGHT_BLUE: '#939DA1',
  PALE_BLUE: '#EFEFEF',
}

const basicColors = {
  BLACK: '#222222',
  DARK_GREY: '#33343D',
  WHITE: '#FFFFFF',
  ORANGE: '#CB7428',
}

const primary = basicColors.ORANGE;
const secondary = basicColors.WHITE;

const primaryBackground = blueShades.DARK_BLUE;
const secondaryBackground = blueShades.LIGHT_BLUE;
const accentBackground = basicColors.ORANGE;

// ORANGE BUTTON - PRIMARY
const primaryButtonBackground = basicColors.ORANGE;
const primaryButtonColor = basicColors.WHITE;
const primaryHoverBackground = 'transparent';
const primaryHoverBorder = basicColors.ORANGE;

// WHITE BUTTON - SECONDARY
const secondaryButtonBackground = 'transparent';
const secondaryButtonColor = basicColors.WHITE;
const secondaryButtonBorder = basicColors.WHITE;
const secondaryHoverBackground = basicColors.WHITE;
const secondaryHoverColor = blueShades.BLUE;

// ICONS COLORS
const iconPrimaryColor = basicColors.WHITE;
const iconSecondaryColor = blueShades.DARK_BLUE;
const iconActivePrimaryColor = basicColors.ORANGE;

const primaryBorderColor = basicColors.ORANGE;
export const colors = {
  blueShades,
  primary,
  secondary,
  basicColors,
  primaryButtonBackground,
  primaryButtonColor,
  primaryHoverBackground,
  primaryHoverBorder,
  secondaryButtonBackground,
  secondaryButtonColor,
  secondaryButtonBorder,
  secondaryHoverBackground,
  secondaryHoverColor,
  iconPrimaryColor,
  iconSecondaryColor,
  iconActivePrimaryColor,
  primaryBorderColor,
  primaryBackground,
  secondaryBackground,
  accentBackground,
}

export const fontSizes = {
  MOBILE: '14px',
  TABLET: '16px',
  DESKTOP: '18px',
}

export const appTheme = {
  colors,
  fontSizes,
}

