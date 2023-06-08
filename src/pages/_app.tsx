import { AppContext, type AppProps } from 'next/app';

import StyledProvider from './lib/StyledProvider';
import PageLayout from './lib/PageLayout';
import { ReactNode } from 'react';
import { Theme, GlobalStyle } from '@/components/global/Theme';

function App({ Component, pageProps }: AppProps) {
	return (
		<StyledProvider theme={Theme}>
			<GlobalStyle />
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</StyledProvider>
	);
}
export default App;
/* <ThemeProvider theme={Theme}> */
/* // </ThemeProvider> */
