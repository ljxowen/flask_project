// theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}


const macTheme = createTheme({
  palette: {
    primary: {
      main: '#7A003C', // McMaster Heritage Maroon
    },
    secondary: {
      main: '#FFC72C', // McMaster Heritage Gold
    },
    tertiary: {
      main: "#AAD5E1", // McMaster Albion Falls Blue
      light: "#DBDBDD" // Dundurn Grey
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', 
    body1: {
        // fontSize: '18px',
        color: '#495965', // primary text color
    },
    body2: {
        // fontSize: '16px', // optional：for secondary text
        color: '#7A003C', // link
      },
    h4: {
        color: '#495965',
    },
    h6: {
      color: '#495965',
    },
  },
});

export default macTheme;
