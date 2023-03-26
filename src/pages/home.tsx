import { useId, Fragment } from "react";
import { CgCornerRightDown } from "react-icons/cg";

import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import React from "react";
import Meta from "../components/Meta";

export default function Home() {
	const pageId = useId();

	return (
		<Fragment>
			<Meta />
			<Header
				id={`home-header-${pageId}`}
				name="Home"
				content=""
				icon={null}
			/>
			<main>
				<Section
					id="home-sect-1"
					name="home"
					content="Welcome to bleek.dev! My name is Brandon Leek and I'm a full-stack
			web developer & tech enthusiast. This site is built with React.js in conjunction with other modern solutions including (but never limited to!) custom state management hooks, React Router, React Icons, Syntactically Awesome Style Sheets (SASS/SCSS), and test suites written with Jest & Enzyme."
					icon={null}
				/>
			</main>
			<Footer id={""} name={`home-footer-${pageId}`} icon={null} />
		</Fragment>
	);
}

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
