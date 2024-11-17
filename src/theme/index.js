// src/theme/index.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  colorSchemes: {
    dark: false,
  },
});
