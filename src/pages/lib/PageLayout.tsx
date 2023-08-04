import { Fragment, useId } from 'react';

import { type LayoutComponent, type MetaComponent } from '@/interfaces/Component';
// import { MainPage, MonocraftNF } from '@/components/common';
import Meta from '@/components/Meta';
import PageHeader from '@/components/PageHeader';
import { MainPage } from '@/components/common';
import PageFooter from '@/components/PageFooter';

export default function PageLayout(props: LayoutComponent) {
	const pageId = useId();
	console.log({ 'page-layout': props });

	return (
		<Fragment>
			<PageHeader id={pageId} />
			<MainPage>{props.children}</MainPage>
			<PageFooter />
		</Fragment>
	);
}
