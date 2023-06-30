import {
	type ReactNode,
	type ReactElement,
	type ReactComponentElement,
	type JSX,
	Fragment,
} from 'react';
import { type LayoutComponent } from '@/interfaces/Component';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { theme, GlobalStyle } from '@/components/global/Theme';\
// import StyledProvider from '../../appdir/lib/StyledProvider';

export default function PageLayout(props: LayoutComponent) {
	return (
		<Fragment>
			<Header />
			{props.children}
			<Footer />
		</Fragment>
	);
}
