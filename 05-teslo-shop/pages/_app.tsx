import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '../themes';
import { SWRConfig } from 'swr';
import { AuthProvider, CartProvider, UIProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <UIProvider>
          <SWRConfig
            value={{
              fetcher: (resource, init) =>
                fetch(resource, init).then((res) => res.json()),
            }}
          >
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Component {...pageProps} />;
            </ThemeProvider>
          </SWRConfig>
        </UIProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
