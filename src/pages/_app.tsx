import { AppContext, type AppProps } from 'next/app';

import StyledProvider from './lib/StyledProvider';
// import PageLayout from './lib/PageLayout';
import { ReactNode } from 'react';
import { GlobalStyle } from '@/components/global/Theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App({ Component, pageProps }: AppProps) {
	return (
		<StyledProvider>
			<Header
				id={[-1]}
				name="testing"
				title="layout.tsx with styled provider, consistent instances of Header, NavBar, Footer across all pages"
			/>
			<Component {...pageProps} />
			<Footer />
		</StyledProvider>
	);
}
export default App;
/* <ThemeProvider theme={Theme}> */
/* // </ThemeProvider> */
