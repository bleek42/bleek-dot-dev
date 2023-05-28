import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { Main } from '@/components/global/Main';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

export default function Page() {
	// const pageId = useId();
	// console.log('about page:', pageId);

	return (
		<>
			<Header
				id={`about-page-header_${1}`}
				name="about-page-header"
				title="About"
				content={['content 1...', 'content 2...', 'content 3...']}
				icon={'\ue456'}
			>
				<Navbar />
			</Header>
			<Main>
				<Section
					id={`about-page-section_${1}`}
					name={`about-page-section_${1}`}
					content="This is About page, section 1"
					icon={null}
				/>
				<Section
					id={`about-page-section_${2}`}
					name={`about-page-section-${2}`}
					content="This is About page, section 2"
					icon={null}
				/>
			</Main>
			<Footer id={`about-page-footer_${1}`} name="About" icon={null} />
		</>
	);
}

// import "./About.scss";

// export default function About() {
// 	return (
// 		<div className="about">
// 			<section>
// 				<h3>{<VscSymbolArray />} About</h3>
// 				<p>
// 					My name is Brandon Leek and I'm Junior Full-Stack Web Developer,
// 					experienced salesman and avid live music fan!
// 				</p>
// 				<p>
// 					I graduated from Thinkful's Full-Stack Engineering Immersion course in
// 					the Summer of 2020, and found an exciting new passion in programming.
// 					Continued efforts have resulted in my first break as a Junior NodeJS
// 					Developer with a financial-tech start up called ZettaLabs.
// 				</p>
// 				<p>
// 					My primary skills reside in React front-end applications & Node.js
// 					back-end applications, but I'm always learning something new and very
// 					active in helping others in my Slack & Discord groups. Some libraries
// 					& frameworks I've been tinkering with include TypeScript, React
// 					Native, Angular, NestJS, MongoDB, & GraphQL.
// 				</p>
// 				<p>
// 					I've been using computers since I was in single-digits: from modding
// 					computer games, tinkering with HTML in the days of MySpace.com,
// 					exploring Linux distros like Ubuntu & Manjaro, rooting android phones
// 					during my time as a Verizon sales rep, and now testing + deploying
// 					fully functional web clients & servers. Prior experience in my
// 					professional & personal life have given me a vested interest in the
// 					direction information technology takes, having been in client-facing
// 					technology sales and of course being a client myself!
// 				</p>
// 				<p>
// 					In my leisure time, I love to travel the country to large scale
// 					events, particularly music festivals! I've been all over the country
// 					and have even volunteered my time at a few, ensuring attendees and
// 					friends alike have the time of time of their lives and remain safe.
// 					It's a unique, collaborative culture that I am proud to call myself a
// 					part of.
// 				</p>
// 			</section>
// 		</div>
// 	);
// }