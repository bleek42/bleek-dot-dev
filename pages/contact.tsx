import type { NextPage } from 'next';
import { Fragment } from 'react';

import Header from '../components/Header';
import Meta from '../components/Meta';
import Section from '../components/Section';
import NavMenu from '../components/NavMenu';

const Contact: NextPage = (): JSX.Element => {
	return (
		<Fragment>
			<Meta />
			<Header title="Contact" description="This is the Contact Section" />
			<NavMenu />
			<Header />
			<Section name="Contact" />
		</Fragment>
	);
};

export default Contact;
