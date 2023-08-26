import Image from 'next/image';

import PageSection from '@/components/PageSection';
import { SectionComponent } from '@/interfaces/Component';

// import { type AssetWhereUniqueQuery } from '@/graphql/queries';
// import { assetWhereQuery } from '@/graphql/client';
// import { type GetStaticProps, type InferGetStaticPropsType } from 'next';

type AboutProps = SectionComponent;

export default function About(props: AboutProps) {
	console.log('about page:', { props });

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
	description: 'about section...',
	icons: ['\uf667'],
	content: [
		'Coming from an increasingly common, if unconventional background in a professional sense, I grew up in New Jersey, USA, graduated High School in 2010, and went straight to the work force rather than college. Despite being a good student, I simply was unsure of what career path I wanted to take, and apprehensive about going for the pure sake of it as others I knew had. As the years went on, I found myself in a comfortable role, but couldn\'t help but feel like I had peeked when I was with Verizon Wireless in Consumer/B2B sales, and just wanting something more, I guess! I started seeking out career change paths that would put this untapped potential I knew I had to better use, and started to think about what I could do that, in some  indirect way, leverage the knowledge & experience I already had. I discovered "Thinkful Schools - Full-Stack Software Engineering Immersion" course, full-time & fully remote mere months before COVID-19 hit the world, which was an incredibly lucky choice on my part over in-person options I also considered! Successfully completing in Summer of 2020, I found an exciting new passion in programming, got my first Junior Developer role, and have been self-teaching & expanding my capabilites ever since!',
		'I have been using computers the early days of the internet with AOL & Windows 98 when I was 9-years-old, and I only regret not being exposed to a programming language sooner..! I think back and wonder why High Schools like mine did not have some elective that introduced students to this! Fortunately though, this means I have always been pretty saavy when it comes to the "userland" part of it all, and have always been considered extremely "tech-literate" amongst peers. I have spent much time doing things like modifying & playing PC games, rooting old cellphones & flashing different software to repurpose them, tinkering with old computers & reviving them with different Linux distributions, and just generally being an effective troubleshooter that can produce desired results, whether working on something solo, or working on something with a diverse range of people and the interpersonal dynamics that come with any given scenario.',
		'I am zealous about fostering competent user/developer habits: keyboard shortcuts, terminal/shell usage, using the mouse less, anything that multiplies efficiency while not harming accuracy is vital! I have excellent keyboard muscle memory & shortcut memorization skills that I have gained throughout the years I have time spent using computers in both work & leisure. After the growing pains of the initial year learning modern-contemporary HTML/CSS/JS, I can say with confidence that I have an advanced understanding of the fundamentals, and can pick up new tools, libraries, and even other programming languages besides JavaScript at a relatively rapid pace, thanks to my perseverance during the inital struggles I went through, yet crucially I embraced the struggles and learned to recognize when I was in over my head, and needed to ask for help. Going on a consistent 4 years now with a GitHub commit history to affirm that, I found that I got a thing for a good development environment setup centered around the shell with Bash/ZSH/Fish startup scripts that make it easier & more inviting to use, a huge appreciation for the concept of type-safety through transitioning from JavaScript to more TypeScript in my projects, and an excellent knack for connecting with & tutoring student developers 1-on-1! While I certainly enjoy this, I recognize that I myself must continue to push my own professional development further, working on another large-scale project in the real-world with senior developers that are able to guide me sometimes, elevating me to the next level!',
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
