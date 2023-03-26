import type { NextPage } from 'next';
import { Fragment } from 'react';


import Meta from '@components/Meta';
import NavMenu from '@components/NavMenu';
import Section from '@components/Section';
import Header from '../components/Heading';

const About: NextPage = (): JSX.Element => {
  return (
		<Fragment>
			<Meta title="about bleek" description="bleek.tech about me section" keywords={[]} />
			<Header name="About" info="some about info" icon={undefined} />
			<NavMenu />
			<Header name="About" info="this is the about me page" />
			<Section />
		</Fragment>
	);
};

About.defaultProps = {
	key: 0,
	name: 'About',
	content: 'this is the about section content..!',
};

export default About;
