import XTerm from '@/components/XTerm';
import { MainPage } from '@/components/common';

import hero from '../public/brandon-mask.png';
import { useId } from 'react';

export default function LandingPage() {
	const pageId = useId();
	return (
		<MainPage>
			<XTerm />
		</MainPage>
	);
}
