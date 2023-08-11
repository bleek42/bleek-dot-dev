import { Fragment, useId } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
// import { PageBg, MonocraftNF } from '@/components/common';
import Meta from '@/components/Meta';
import PageHeader from '@/components/PageHeader';
import { PageBg } from '@/components/common';
import PageFooter from '@/components/PageFooter';

export default function PageLayout(props: LayoutComponent) {
	const pageId = useId();
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
