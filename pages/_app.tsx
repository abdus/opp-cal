import React from 'react';
import '../styles/globals.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import type { AppProps } from 'next/app';

function MyApp(props: AppProps) {
  return <props.Component {...props.pageProps} />;
}

// eslint-disable-next-line
export default MyApp;
