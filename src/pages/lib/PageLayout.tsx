import { Fragment } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
import PageHeader from '@/components/PageHeader';
import { GlobalStyle, PageBg } from '@/components/common';
import PageFooter from '@/components/PageFooter';
import { NavBar } from '@/components/Navbar/Navbar';
import Meta from '@/components/common/Meta';

export default function PageLayout(props: LayoutComponent) {
	// console.log({ 'page-layout': props });

	return (
		<Fragment key={props.id ?? 'meta-bleek_0'}>
			<GlobalStyle />
			<Meta id={props.id ?? 'meta-bleek_0'} />
			<PageHeader />
			<PageBg>{props.children}</PageBg>
			<PageFooter name="page-footer" description="bleekDotDev base page footer" />
		</Fragment>
	);
}
