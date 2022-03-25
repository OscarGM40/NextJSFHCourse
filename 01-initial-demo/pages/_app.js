import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /* buscar por la funcion getLayout en cada componente.Si no la tiene simplemente devuelves la página(no hagas nada) */
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />;

  return getLayout(<Component {...pageProps} />,'about');
}

export default MyApp;
