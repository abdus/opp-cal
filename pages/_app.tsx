import React from 'react';
import '../styles/globals.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/NavBar';
import { ContextProvider } from '../context';

function MyApp(props: AppProps) {
  return (
    <ContextProvider>
      <NavBar />
      <props.Component {...props.pageProps} />
    </ContextProvider>
  );
}

// eslint-disable-next-line
export default MyApp;
