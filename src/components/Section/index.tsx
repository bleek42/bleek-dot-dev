import { useId } from 'react';
import { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type SectionComponent } from '@/interfaces/Component';
import { Section as Wrapper, Article } from './Section';
import { LgTxt, MdTxt, SmTxt } from '@/components/global/Text';

type SectionProps = StyledComponentProps<
	'section' | keyof JSX.IntrinsicElements,
	DefaultTheme,
	SectionComponent,
	string | number | symbol
>;

export default function Section({ name, content, icon = '\ue667' }: SectionProps) {
	const sectionId = useId();
	console.log('section component:');
	return (
		<Wrapper key={`section-${sectionId}`} id={`section-${sectionId}`}>
			<LgTxt>
				{name} - {icon}
			</LgTxt>
			<Article>
				<SmTxt font="MonocraftNF" color="neon">
					{content || 'No article content  provided...'}
				</SmTxt>
			</Article>
			<Article>
				<MdTxt font="Oxanium" color="cyan">
					Test MDTXT
				</MdTxt>
			</Article>
			<Article>
				<LgTxt font="Oxanium" color="cyan">
					Test MDTXT
				</LgTxt>
			</Article>
		</Wrapper>
	);
}
// <section id={`sect-${id}` || 'sect-0'}>
// 	<span>
// 		<h3>
// 			You are in the<pre>{name || 'unknown'}</pre>section!
// 		</h3>
// 		{icon ? <i>{icon}</i> : <p>No Icon Prop</p>}
// 	</span>
// 	<article>
// 		<p>
// 			Article:
// 			<pre>{content || 'article content'}</pre>
// 			<code>{'someCode()'}</code>
// 		</p>
// 	</article>
// </section>
// import "./About.scss";
// import { Wrapper } from './Section';

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
