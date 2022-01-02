import type { NextPage } from 'next';

import Header from '../components/Header';
import Meta from '../components/Meta';
import Section from '../components/Section';
import NavMenu from '../components/NavMenu';

const Contact: NextPage = () => {
	return (
		<>
			<Meta />
			<NavMenu />
			<Header />
			<Section name="Contact" />
		</>
	);
};

export default Contact;
