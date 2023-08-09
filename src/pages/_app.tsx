import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

const MarketplaceContextProvider = dynamic(
  () => import('context/MarketplaceContextProvider'),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MarketplaceContextProvider>
      <Component {...pageProps} />
    </MarketplaceContextProvider>
  );
}

export default MyApp;
