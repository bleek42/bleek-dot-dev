import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Meta from '../components/Meta';
import styles from '../styles/LandingPage.module.scss';

const LandingPage: NextPage = (): JSX.Element => {
	return (
		<div className={styles.container}>
			<Meta />
			<div className={styles.intro}>
				<h3>Brandon C. Leek</h3>
				<h4>Full Stack Web Developer & Mobile Tech Expert</h4>
				<p>some info about me...</p>
			</div>
			<div className={styles.img}>
				<p>img placeholder</p>
				{/* <Image src="some/path/to/my/image" alt="my-image" /> */}
			</div>
			<div className={styles.dismiss}>
				<Link href="/home">
					<a>Click to continue</a>
				</Link>
			</div>
		</div>
	);
};

export default LandingPage;
