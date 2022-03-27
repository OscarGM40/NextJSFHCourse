import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement, name?: string) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  /* buscar por la funcion getLayout en cada componente.Si no la tiene simplemente devuelves la página(no hagas nada) */
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />;

  return getLayout(<Component {...pageProps} />, "about");
}

export default MyApp;
