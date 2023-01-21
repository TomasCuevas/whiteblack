import type { AppProps } from "next/app";

//* styles *//
import "../styles/globals.css";

//* providers *//
import { UIProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
