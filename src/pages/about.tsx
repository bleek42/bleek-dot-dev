import Image from 'next/image';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';

import { type AssetWhereUniqueQuery } from '@/graphql/queries';
import { assetWhereQuery } from '@/graphql/client';
import Section from '@/components/Section';
import { Icon } from '@/components/common';

const sectionContent = [
	'I graduated from Thinkfuls Full-Stack Engineering Immersion course in the Summer of 2020 & found an exciting new passion in programming. My continued efforts brought me my first break as a Junior Developer with a data tech start up called ZettaLabs.',
	'I have been using computers since the days of AOL dialup, and I only regret not being exposed to a programming language sooner..! Luckily though, this means I have always been rather tech saavy when it comes to the userland space. I have spent much time modding & playing PC games, flashing different operating systems, rooting cellphones, & otherwise tinkering & troubleshooting all types of digital interfaces with a swiftness & accuracy that I can attribute to the excellent keyboard muscle memory & shortcut memorization I have gained through all this I have time spent using computers in work & leisure, well before my first "print hello world" program. I can confidently say this serves me well, after the growing pains of the initial year working with modern-contemporary HTML, CSS, & JS! I am going on 4 years of ongoing experience now, and I have even discovered just recently that I have a great knack for teaching new developers as well!',
	'Outside of work, I am (still) a bit of a nerd one might say, when it comes to history & music anyway! If it has anything to do with technological, military, & political developments of the past 3 centuries, I can probably tell you all about it! I have also been an avid (if opinionated, at times) fan of all sorts of different sub-genres of music, ranging from punk rock to hip-hop to electronic music since I was barely a teenager & have always had a deep appreciation for the sub-cultures & counter-cultures within.',
	'The latter has culminated in what has been 100+ live acts I have seen over the years, as I have been to tons of different concerts & music festivals on both a local & national scale, and I hope to take this to the next level with international experiences, someday soon! I was regularly involved with an event promoter in the local Philadelphia scenes, and I even volunteer at a few annual festivals in their efforts towards ensuring attendees have a lucid friend nearby that is not afraid to intervene when someone is in trouble, always has cold water on hand, & ensures lost valuables are once again found by their owners - those sorts of things that maximize safety & fun in an entirely wholesome way. The former is perhaps less exciting, yet probably more important but I have always been considered the "worldly & knowledgable" one amongst my close friend groups when it comes to an assortment of historical topics & how they relate to current events. If I really think about it, I suppose I have always prided myself on all of these things and consider myself an intelligent, conscientious, analytical, empathetic, & self-aware person that still strives to maintain a capacity for humility & open-mindedness.',
];

export default function About(props: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log('about page:', { props });

	// <Image
	// 	src={props.result.asset?.url || 'https://'}
	// 	alt={props.result.asset?.handle || 'bleek42'}
	// 	width={props.result.asset?.width || 40}
	// 	height={props.result.asset?.height || 40}
	// />
	return (
		<Section
			name="about_section"
			description={'about...'}
			content={sectionContent.join(' ')}
		/>
	);
}

export const getStaticProps: GetStaticProps<{
	result: AssetWhereUniqueQuery;
}> = async () => {
	const result: Awaited<AssetWhereUniqueQuery> =
		await assetWhereQuery.AssetWhereUnique();

	console.log('/about result', { result });

	return {
		props: {
			result,
		},
	};
};

/*
	return (
		<div className="about">
			<section>
				<h3>{<VscSymbolArray />} About</h3>
				<p>
					My name is Brandon Leek and I'm Junior Full-Stack Web Developer,
					experienced salesman and avid live music fan!
				</p>
				<p>

				</p>
				<p>
					My primary skills reside in React front-end applications & Node.js
					back-end applications, but I'm always learning something new and very
					active in helping others in my Slack & Discord groups. Some libraries
					& frameworks I've been tinkering with include TypeScript, React
					Native, Angular, NestJS, MongoDB, & GraphQL.
				</p>
				<p>

				</p>
				<p>
				</p>
			</section>
		</div>

*/
