import type { AppProps } from "next/app";
import Head from "next/head";

//* styles *//
import "../styles/article.css";
import "../styles/globals.css";
import "../styles/header.css";

//* providers *//
import { UIProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Head>
        <link rel="icon" type="image/x-icon" href="/wb.svg"></link>
      </Head>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
