import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#381932',       // Plum
      light: '#5a2a4f',
      dark: '#220e1f',
      contrastText: '#FFF3E6', // Milk
    },

    secondary: {
      main: '#FFF3E6',       // Milk
      light: '#ffffff',
      dark: '#e6d8cc',
      contrastText: '#381932',
    },

    background: {
      default: '#FFF3E6',    // Main background (Milk)
      paper: '#ffffff',      // Cards slightly whiter
    },

    text: {
      primary: '#381932',    // Plum text
      secondary: '#6e4b65',
    },

    divider: 'rgba(56, 25, 50, 0.12)',
  },

  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',

    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 14, // slightly smoother for premium feel
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 24px',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#381932',
            color: '#FFF3E6',
            '&:hover': {
              backgroundColor: '#2a1226',
            },
          },
        },
      ],
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#ffffff',
          border: '1px solid rgba(56, 25, 50, 0.08)',
          boxShadow: '0 4px 20px rgba(56, 25, 50, 0.05)',
        },
      },
    },
  },
});

export default theme;
