export const colors = {
  textColor: {
    primary: '#0F4D6B',
    primaryTransparent: 'rgba(15, 77, 107, .5)',
    secondary: '#FFFFFF',
    accent: '#680F21',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#E7EDF0',
    lightBlue: '#B7CAD2',
    blue: '#3F7186',
    darkBlue: '#0F4D6B',
    accent: '#680F21',
  },
  opacity: '.7',
}

export const size = {
  fontSize: {
    navbar: {
      mobile: '16px',
      tablet: '14px',
      laptop: '13px',
      laptopLarge: '15px',
    },
    button: {
      mobile: '14px',
      tablet: '12px',
      laptop: '10px',
      laptopLarge: '13px',
    },
    h1: {
      mobile: '40px',
      desktop: '60px',
    },
    h2: {
      mobile: '20px',
      desktop: '40px',
    },
  },
}

export const transition = {
  borderColor: 'border-color 0.4s ease 0s, background-color 0.4s ease 0s',
  textColor: 'color 0.4s ease 0s',
};

export const appTheme = {
  colors,
  transition,
  size,
}

