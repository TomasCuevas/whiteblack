import type { AppProps } from "next/app";
import Head from "next/head";

//* STYLES *//
import "@/styles/article.css";
import "@/styles/articleCard.css";
import "@/styles/articleSidebar.css";
import "@/styles/globals.css";

//* PROVIDERS *//
import { UIProvider } from "@/context";

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
