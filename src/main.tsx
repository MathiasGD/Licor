import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '2px',            
            backgroundColor: '#FFF3EA',
            height: '36px',
            '& input': {
              fontSize: '14px',
            },
            '& fieldset': {
              borderColor: '#7A1C52',
            },
            '&:hover fieldset': {
              borderColor: '#980A68',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#980A68',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px',
            top: '0px',
            color: '#2B2725',
            '&.Mui-focused': {
              color: '#980A68',
            },
          },
        },
      },
    },
  },
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
