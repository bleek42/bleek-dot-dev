import { ThemeProvider } from 'styled-components';

import Meta from '@global/Meta';
import XTerm from '@components/XTerm';
import { Main } from '@global/Main';

import hero from '../public/brandon-mask.png';

export default function LandingPage() {
	return (
		<Main>
			<Meta />
			<XTerm />
		</Main>
	);
}
