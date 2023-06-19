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

export default function PageLayout({ children }: LayoutComponent) {
	return (
		<Fragment>
			<Header
				id={[-1]}
				name="testing"
				title="layout.tsx with styled provider, consistent instances of Header, NavBar, Footer across all pages"
			/>
			{children}
			<Footer />
		</Fragment>
	);
}
