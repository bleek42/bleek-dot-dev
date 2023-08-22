import { type AppProps } from 'next/app';

import { type MetaComponent } from '@/interfaces/Component';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/components/common/Theme';
import Meta from '@/components/common/Meta';
import PageLayout from '@/lib/PageLayout';
import LandingPage from './index';

function App({ Component, pageProps }: AppProps) {
	console.log(Component.displayName);
	return (
		<ThemeProvider theme={theme}>
			<Meta />
			<GlobalStyle />
			{Component !== LandingPage ? (
				<PageLayout>
					<Component {...pageProps} />
				</PageLayout>
			) : (
				<Component {...pageProps} />
			)}
		</ThemeProvider>
	);
}

export default App;
