import { Fragment } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
import PageHeader from '@/components/PageHeader';
import { PageBg } from '@/components/common';
import PageFooter from '@/components/PageFooter';

export default function PageLayout(props: LayoutComponent) {
	console.log({ 'page-layout': props });
	// id={pageId}
	return (
		<Fragment>
			<PageHeader />
			<PageBg>{props.children}</PageBg>
			<PageFooter />
		</Fragment>
	);
}
