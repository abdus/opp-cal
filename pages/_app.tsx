import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import type { AppProps } from 'next/app';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { NavBar } from '../components/NavBar';
import { ContextProvider } from '../context';
import classes from '../styles/_app.module.css';

function MyApp(props: AppProps) {
  const router = useRouter();
  const [isPageLoading, setIsPageLoading] = React.useState(false);

  React.useEffect(() => {
    router.events.on('routeChangeStart', () => setIsPageLoading(true));
    router.events.on('routeChangeComplete', () => setIsPageLoading(false));
    router.events.on('routeChangeError', () => setIsPageLoading(false));

    return () => {
      router.events.off('routeChangeStart', () => setIsPageLoading(true));
      router.events.off('routeChangeComplete', () => setIsPageLoading(false));
      router.events.off('routeChangeError', () => setIsPageLoading(false));
    };
  }, []);

  return (
    <ContextProvider>
      {isPageLoading && <div className="page_loader" />}

      <NavBar />
      <ThemeSwitcher />

      <props.Component {...props.pageProps} />
    </ContextProvider>
  );
}

// eslint-disable-next-line
export default MyApp;
