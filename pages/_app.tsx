import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

import globalCss from '../styles/global';
import SiteSelectionThemeProvider from '../src/theme/theme.context';
import Layout from '../src/layout/components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteSelectionThemeProvider>
      <Global styles={globalCss} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteSelectionThemeProvider>
  );
}

export default MyApp;
