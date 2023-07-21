import type { NextPage } from 'next';

import { useId } from 'react';

import Section from '@/components/Section';


export default function Home() {

	return (
		<Section
			id={`home-section`}
			name="Home"
			description="bleek.dev/home"
			content="Welcome & thanks for visiting! I'm Brandon Leek: a full-stack web developer, Linux enthusiast, & lifelong power user. I hope you find the results of my latest iterations on my portfolio rather unique, yet still modern-contemporary, and of course a pleasure to use as you navigate around! This was create with React via NextJS, GraphQL via Hygraph CMS, custom CSS-in-JS via Styled Components, & full TypeScript integration!"
		/>
	);
}

// <Header
// 	id={`home-header-${pageId}`}
// 	name="home"
		// <PageLayout>
		// </PageLayout>
// 	title="Home"
// 	content="bleekDotDev"
// 	icon={null}
// />
// <Footer id={`home-footer-${pageId}`} name="home" icon={null} />
// <div className="home">
// 	<header>
// 		<h1>Brandon Leek</h1>
// 		<h2>Web Developer & Mobile Tech Enthusiast</h2>
// 	</header>
// 	<section>
// 		<p>

// 			<div className="dwn-icn">
// 				<CgCornerRightDown />
// 			</div>
// 		</p>
// 		<p></p>
// 	</section>
// 	<section>
// 		<ul>
// 			<li>
// 				<a
// 					id="pf-repo"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://github.com/bleek42/bleek42-react-portfolio">
// 					Portfolio repository on Github.com
// 				</a>
// 			</li>
// 			{/* <li>
// 				<a
// 					id="aj"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://androidjones-obtain.com/?gclid=CjwKCAjwh7H7BRBBEiwAPXjadhkPGYgKyIHH1PdY8iEVzfSSD0qIDsHL3uevBzcC362xwoY-xJWkFhoCyq8QAvD_BwE"
// 				>
// 					Check out more of Android Jones artwork
// 				</a>
// 			</li> */}
// 			<li>
// 				<a
// 					id="react"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://reactjs.org/">
// 					React.js - A JavaScript Library for creating User Interfaces
// 				</a>
// 			</li>
// 			<li>
// 				<a
// 					id="hooks"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://reactjs.org/docs/hooks-intro.html">
// 					React Hooks & Functional Components
// 				</a>
// 			</li>
// 			<li>
// 				<a
// 					id="r-rtr"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://reactjs.org/docs/hooks-intro.html">
// 					React Router
// 				</a>
// 			</li>
// 			<li>
// 				<a
// 					id="icn"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://react-icons.github.io/react-icons/">
// 					React Icons Pack
// 				</a>
// 			</li>
// 			<li>
// 				<a
// 					id="scss"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://sass-lang.com/">
// 					SASS/SCsSS - A CSS Pre-Processor
// 				</a>
// 			</li>
// 			<li>
// 				<a
// 					id="hooks"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://jestjs.io/">
// 					Jest Testing Framwork
// 				</a>
// 			</li>
// 			<li>
// 				<a
// 					id="enz"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					href="https://enzymejs.github.io/enzyme/">
// 					Enzyme.js
// 				</a>
// 			</li>
// 		</ul>
// 	</section>
// </div>
