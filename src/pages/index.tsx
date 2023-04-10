import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import Meta from '@global/Meta';
import XTerm from '@components/XTerm';
import { MainBG } from '@components/global/style';

import hero from '../public/brandon-mask.png';
import theme from '@components/global/theme';

export default function LandingPage() {
	return (
		<ThemeProvider theme={theme}>
			<MainBG>
				<Meta />
				<XTerm />
			</MainBG>
		</ThemeProvider>
	);
}
