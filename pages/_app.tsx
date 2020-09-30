import type { AppProps /*, AppContext */ } from "next/app";
import "react-multi-carousel/lib/styles.css";
import "../styles/globals.css"
import "../styles/styles.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
  