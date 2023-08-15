import { useId, type Key } from 'react';
import Image from 'next/image';
import bleekImg from '/public/images/brandon-mask.png';

import { type SectionComponent } from '@/interfaces/Component';
import { Section as Wrapper, Article } from './Section';
<<<<<<< HEAD
import { Details, Summary } from '@/components/common/Details';
import { Icon, LgTxt, MdTxt, SmTxt } from '@/components/common';
import { AssetWhereUniqueDocument, AssetWhereUniqueQuery } from '@/graphql/queries';
import { AssetConnection } from '@/graphql/hygraph-types';
=======
import { LgTxt, MdTxt, SmTxt } from '@/components/common/Text';
>>>>>>> origin/main

type SectionProps = SectionComponent;

export default function Section(props: SectionProps) {
	console.log({ 'section-component': props });
	const sectionId = useId();
	return (
		<Wrapper
			key={`section-${props.id ?? sectionId}`}
			id={`section-${props.id ?? sectionId}`}
		>
			<LgTxt>
				{props.name ?? 'No Section Name...'}
				<Icon>{props.icon ?? '\ue667'}</Icon>
			</LgTxt>
			{!props.image && props.name === 'about' && (
				<Image
					src={bleekImg}
					alt={'brandon-mask'}
					width={400}
					height={360}
					priority
				/>
			)}
			{props.content && (
				<Article
					id={`article-${props.id ?? sectionId}`}
					key={`article-${props.id + sectionId ?? sectionId}`}
				>
					<SmTxt
						$font={'MonocraftNF'}
						$colorPalette={'tertiary'}
						$color={'drab'}
					>
						{props.content}
					</SmTxt>
				</Article>
			)}
			{props.content &&
				Array.isArray(props.content) &&
				props.content.length >= 1 &&
				props.content.map((articleContent: string, idx: Key) => (
					<Article id={`article-idx-${idx}`} key={`article-idx-${idx}`}>
						<SmTxt
							$font={'MonocraftNF'}
							$colorPalette={'tertiary'}
							$color={'black'}
						>
							{articleContent}
						</SmTxt>
					</Article>
				))}

			{/* {props.image && Array.isArray(props.image) && props.image.length >= 1 && (
				<>
					{props.image.map(({ asset }: AssetWhereUniqueQuery, idx) => (
						<Details key={`asset-${asset.id || idx}`}>
							<Summary>
								<MdTxt>Details Component: Summary BlkTxt</MdTxt>
								<Details>
									<Image
										src={`${asset?.url}/${asset?.fileName}`}
										alt={`${asset?.fileName}`}
										width={200}
										height={400}
									/>
								</Details>
							</Summary>
						</Details>
					))}
				</>
			)} */}

			{!props.content && (
				<Article>
					<SmTxt>This section has no content to show...</SmTxt>
				</Article>
			)}
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
