import type { NextPage } from 'next';
import { Fragment } from 'react';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Section from '../components/Section';
import Header from '../components/Header';

const About: NextPage = (): JSX.Element => {
	return (
		<Fragment>
			<Meta />
			<Header />
			<Section />
			<Footer />
		</Fragment>
	);
};

About.defaultProps = {
	key: 0,
	name: 'About',
	content: 'this is the about section content..!',
};

export default About;
