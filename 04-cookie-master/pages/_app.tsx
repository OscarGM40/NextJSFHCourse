import { CssBaseline, ThemeProvider } from '@mui/material';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import '../styles/globals.css';
import { customTheme, darkTheme, lightTheme } from '../themes';

const themes ={ 
  'light': lightTheme,
  'dark': darkTheme,
  'custom': customTheme,
}

type Tema = 'light' | 'dark' | 'custom';
interface Props extends AppProps {
  theme: "light" | "dark" | "custom";
}
function MyApp({ Component, pageProps, theme }: Props) {

  const [currentTheme, setCurrentTheme] = useState<Tema>('light');
  
  useEffect(() => {
    const themeB = Cookies.get('theme') as Tema || 'light';
    setCurrentTheme(themeB);    
  },[]);
  
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

/* MyApp.getInitialProps = async (ctx: AppContext) => {
  const cookies = ctx.ctx.req
    ? (ctx.ctx.req as any).cookies
    : { theme: 'light' };
  const validThemes = ['light', 'dark', 'custom'];

  return {
    theme: validThemes.includes(cookies.theme) ? cookies.theme : 'light',
  };
}; */

export default MyApp;
