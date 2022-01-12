import type { NextPage } from 'next';
import { Fragment } from 'react';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Section from '../components/Section';
import NavMenu from '../components/NavMenu';

const About: NextPage = (): JSX.Element => {
	return (
		<Fragment>
			<Meta />
			<Header />
			<NavMenu />
			<Header headerTitle="About" headerDesc="this is the about me page" />
			<Section name="about" />
		</Fragment>
	);
};

export default About;
