import XTerm from '@/components/XTerm';
import { Main } from '@/components/global/Main';

import hero from '../public/brandon-mask.png';
import { useId } from 'react';

export default function LandingPage() {
	const pageId = useId();
	return (
		<Main>
			<XTerm name="/dev/pts/tty0" />
		</Main>
	);
}
