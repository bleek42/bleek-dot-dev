
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import XTForm from '@/components/Form';
import Meta from '@/components/universal/Meta';
import { Main } from '@/components/universal/Main';
import theme from '@/components/universal/theme';

import hero from '../public/brandon-mask.png';
import { PageBg } from '@/components/common';

export default function LandingPage() {
	return (
		<PageBg>
			<XTForm />
		</PageBg>
	);
}
