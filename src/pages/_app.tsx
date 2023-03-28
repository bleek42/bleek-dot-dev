import GlobalStyle from '@components/global';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';

function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<GlobalStyle />
			<Component {...pageProps} />
		</Fragment>
	);
}
export default App;
