import {
	type ReactNode,
	type ReactElement,
	type ReactComponentElement,
	type JSX,
	Fragment,
} from 'react';

import { type BaseComponent } from '@/interfaces/BaseComponent';
import { theme, GlobalStyle } from '@/components/global/Theme';

import StyledProvider from '../../appdir/lib/StyledProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseComponentProps } from '@/props/base.component.props';

interface LayoutChildren {
	children: ReactNode | ReactNode[];
}
export default function PageLayout({ children }: LayoutChildren) {
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
