import { Fragment } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';

import Meta from '@/components/common/Meta';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import { GlobalStyle, PageBg } from '@/components/common';

export default function PageLayout(props: LayoutComponent) {
	// console.log({ 'page-layout': props });

	return (
		<Fragment key={props.id ?? 'meta-bleek_0'}>
			<Meta id={props.id ?? 'meta-bleek_0'} />
			<GlobalStyle />
			<PageHeader />
			<PageBg>{props.children}</PageBg>
			<PageFooter
				name="page-footer"
				description="bleekDotDev base page footer"
				content="https://github.com/bleek42/bleek-dot-dev"
			/>
		</Fragment>
	);
}
