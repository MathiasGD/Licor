import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7A1C52',
      light: '#980A68',
      dark: '#680747',
      contrastText: '#FFF3EA',
    },
    text: {
      primary: '#141010',     // preto
      secondary: '#2B2725',   // preto-fraco
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 400,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: '8px 40px',
        },
        outlined: {
          borderColor: '#7A1C52',
          '&:hover': {
            backgroundColor: 'rgba(122, 28, 82, 0.04)',
          },
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
