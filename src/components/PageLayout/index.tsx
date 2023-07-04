import { Fragment } from 'react';

import { type LayoutComponent } from '@/interfaces/Component';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PageLayout(props: LayoutComponent) {
	return (
		<Fragment>
			<Header />
			{props.children}
			<Footer />
		</Fragment>
	);
}
