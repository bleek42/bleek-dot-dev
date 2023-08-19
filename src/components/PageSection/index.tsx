import { useId, type Key, Fragment } from 'react';
import Image from 'next/image';
import bleekImg from '/public/images/brandon-mask.png';

import { type SectionComponent } from '@/interfaces/Component';
import { type SectionProps, Section, Article, ContactCard } from './Section';
import { Icon, LgTxt, MdTxt, SmTxt } from '@/components/common';
// import { Details, Summary } from '@/components/common/Details';

export default function PageSection(props: SectionProps & SectionComponent) {
	console.log({ 'section-component': props });
	const sectionId = useId();
	return (
		<Section
			key={`section-${props.id ? props.id + sectionId : sectionId}`}
			id={`section-${props.id ? props.id + sectionId : sectionId}`}
		>
			<LgTxt>{props.name}</LgTxt>
			<Icon $colorPalete="tertiary" $color="cyan">
				{props.icon ?? '\ue667'}
			</Icon>
			{!props.image && props.name === 'about' && (
				<Image
					src={bleekImg}
					alt={'brandon-mask'}
					width={400}
					height={360}
					priority
				/>
			)}
			{props.name === 'contact' && props.content && props.icons && (
				<Article
					id={`article-contact-${props.id ? props.id + sectionId : sectionId}`}
				>
					<MdTxt>Contact</MdTxt>
					<ContactCard>
						<Icon>{props.icons.at(0)} Email:</Icon>
						<SmTxt $colorPalette="secondary" $color="blue">
							{props.content.at(0)}
						</SmTxt>
						<Icon>{props.icons.at(1)} LinkedIn:</Icon>
						<SmTxt>{props.content.at(1)}</SmTxt>
						<Icon>{props.icons.at(2)} GitHub:</Icon>
						<SmTxt>{props.content.at(2)}</SmTxt>
					</ContactCard>
				</Article>
			)}
			{typeof props.content === 'string' && (
				<Article
					id={`article-${props.id ? props.id + sectionId : sectionId}`}
					key={`article-${props.id ? props.id + sectionId : sectionId}`}
				>
					<SmTxt>{props.content}</SmTxt>
				</Article>
			)}
			{props.name !== 'contact' &&
				Array.isArray(props.content) &&
				props.content.length >= 1 &&
				props.content.map((articleContent: string, idx: Key) => (
					<Article
						id={`article-num-${idx}-${
							props.id ? props.id + sectionId : sectionId
						}`}
						key={`article-num-${idx}-${
							props.id ? props.id + sectionId : sectionId
						}`}
					>
						<SmTxt
							$font={'MonocraftNF'}
							$colorPalette={'tertiary'}
							$color={'black'}
						>
							{articleContent}
						</SmTxt>
					</Article>
				))}

			{/* <Article id="err-article-no-content">
						<SmTxt id="err-article-txt">
							No props passed: section/article component has nothing to
							display...
						</SmTxt>
					</Article>
				 */}
		</Section>
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
// <Icon>{props.content?.email?.icon}</Icon>
// <SmTxt id="">{props.content.email.text}</SmTxt>
// import "./About.scss";
// import { Section } from './Section';

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
