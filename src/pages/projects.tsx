import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

import Header from '../components/Header';
import Meta from '../components/Meta';
import NavMenu from '../components/NavMenu';
import Section from '../components/Section';
import SectionDetails from '../components/SectionDetails';

const Projects: NextPage = (): JSX.Element => {
	const [data, setData] = useState([]);

	return (
		<Fragment>
			<Meta title="bleek.tech - projects" />
			<NavMenu />
			<Header />
		</Fragment>
	);
};

export default Projects;
