import { useId, type Key, Fragment } from 'react';
import Image from 'next/image';
import bleekImg from '/public/images/brandon-mask.png';

import { type SectionComponent } from '@/interfaces/Component';
import { type SectionProps, Section, Article, ContactCard } from './Section';
import { Icon, LgTxt, MdTxt, SmTxt } from '@/components/common';
// import { Details, Summary } from '@/components/common/Details';

export default function PageSection(props: SectionProps & SectionComponent) {
	// console.log({ 'section-component': props });
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
		</Section>
	);
}
