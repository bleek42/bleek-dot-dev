import type { NextPage } from 'next';

import Meta from '../components/Meta';
import NavMenu from '../components/NavMenu';

const Home: NextPage = (): JSX.Element => {
	return (
		<div className="container">
			<Meta
				title="Home - bleek.tech"
				description="Brandon Leek's portfolio website home page"
				keywords="brandon, leek, bleek, web development, portfolio, portfolio home page, next.js, SCSS, enzyme.js, react, node.js, javascript, full stack"
			/>
			<NavMenu />
			<main className="home">
				<header>
					<h1>Brandon Leek</h1>
					<h2>Full-Stack React & Node.js Developer</h2>
				</header>
				<section>
					<p>
						Welcome to bleek.tech! This site was created with Next.js, TypeScript, React functional components with
						state hooks, server-side rendering, an integrated API using Mongoose, MongoDB, GraphQL, the GitHub API,
						React Icons, SCSS stylesheets, and unit testing with Jest & Enzyme.
					</p>
					<div className="dwn-icon">
						<span>icon goes here</span>
					</div>
				</section>
				<section>
					<ul>
						<li>
							<a
								id="pf-repo"
								href="https://github.com/bleek42/bleek-dot-tech"
								target="_blank"
								rel="noopener noreferrer"
							>
								Click here to see bleek.tech&apos;s code repo on GitHub
							</a>
						</li>
						<li>
							<a
								id="next-js"
								href="https://github.com/bleek42/bleek-dot-tech"
								target="_blank"
								rel="noopener noreferrer"
							>
								Click here to see bleek.tech&apos;s code repo on GitHub
							</a>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Home;
