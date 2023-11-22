import Image from 'next/image';

import PageSection from '@/components/PageSection';
import { SectionComponent } from '@/interfaces/Component';

type AboutProps = SectionComponent;

export default function About(props: AboutProps) {
	return (
		<PageSection
			name={props.name}
			description={props.description}
			content={props.content}
		/>
	);
}

About.defaultProps = {
	name: 'about',
	description: null,
	content: [
		'Coming from an increasingly common, if unconventional background in a professional sense, I grew up in New Jersey, USA, graduated High School in 2010, and went straight to the work force rather than college. Despite being a good student, I simply was unsure of what career path I wanted to take, and apprehensive about going for the pure sake of it as others I knew had. As the years went on, I found myself in a comfortable role, but couldn\'t help but feel like I had peeked when I was with Verizon Wireless in Consumer/B2B sales, and just wanting something more! I started seeking out career change paths that would put this untapped potential I knew I had to better use, and started to think about what I could do that, in some  indirect way, leverage the knowledge & experience I already had. I discovered "Thinkful Schools - Full-Stack Software Engineering Immersion" course, full-time & fully remote mere months before COVID-19 hit the world, which was an incredibly lucky choice on my part over in-person options I also considered! Successfully completing in Summer of 2020, I found an exciting new passion in programming, got my first Junior Developer role, and have been expanding my capabilites without pause ever since!',

		'I have been a lifelong tech-savvy power user & relentless troubleshooter with 4 years of consistent full stack software development experience, as well as 1.5 years now teaching others how they can do it too: from programming fundamentals via modern HTML, CSS, & JavaScript, learning & mastering the text-only user interface via terminal emulators & various shell scripting paradigms, or just merely becoming a more effective, tech-literate user of software in ones work & leisure. Free & Open-Source Software acolyte with a strong emphasis on attention to the vital, if sometimes subtle fundamentals, details, accuracy, & efficiency. Especially when it comes to finding your way around with keybindings & shortcuts! I stress strong user/developer routines, habits, & intentional practices early on, as a part of the learning philosophy I impress upon my students. I also genuinely find enthrallment in learning more myself on a daily basis, whether operating in close collaboration with a team, a student, or solo. I love tinkering with my operating systems, development environments, internal processes, automated scripts, software configurations, and practically live out of one of the 3 different terminal/shell setups that I continue improving upon. I would describe my work style as proactive, analytical, and can assert with confidence in my strong interpersonal skills, technical capabilities, plenty of potential value, over a decade of experience working with a wide range of clientele using information technology in some capacity, and most importantly successfully transitioning into a more intellectually demanding profession in recent years with a dual developer/teacher dynamic.',

		'Outside of work, I am (still) a bit of a nerd one might say, specifically when it comes to history & music anyway! If it has anything to do with technological, cultural, military, or political developments of the past 3 centuries, whether in or outside of my own USA, I can probably tell you something interesting about it, at the very least! I am also an avid (if opinionated, at times) fan of all sorts of different sub-genres of music, ranging from hardcore punk rock, to hip-hop, to all types of electronic music since I was barely a teenager. I love the assorted counter-cultures & sub-cultures that formed behind these sounds, and being a part of them at different moments in time has been a defining, positive influence on who I am today.',
		'The latter has culminated in 100+ live acts I have seen over the years, as I have been to tons of different concerts & music festivals on local, regional, & national scales, which I hope to take the next step up to international experiences someday soon! I was regularly involved with an event promoter in the local Philadelphia & NYC music scenes, and I even volunteer at a few annual festivals in their harm reduction efforts. Not afraid of large crowds, I took part in ensuring attendees have a completely lucid & sober friend nearby that is not afraid to intervene when someone is in trouble, always has cold water on hand, ensures lost valuables are once again found by their owners - those sorts of things that maximize safety & fun in an entirely wholesome way.',
		'The former is perhaps less exciting yet probably more important, but I have always been considered the "worldly & knowledgable" one amongst friends & co-workers when it comes to an assortment of historical topics, current events, and how they relate to one another. I suppose I have always prided myself on being all of these things: an intelligent, conscientious, analytical, empathetic, & self-aware person that can connect with just about anyone, while still maintaining a capacity for humility & open-mindedness.',
	],
};

// export const getStaticProps: GetStaticProps<{
// 	result: AssetWhereUniqueQuery;
// }> = async () => {
// 	const result: Awaited<AssetWhereUniqueQuery> =
// 		await assetWhereQuery.AssetWhereUnique();

// 	console.log('/about result', { result });

// 	return {
// 		props: {
// 			result,

// 		},
// 	};
// };

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
