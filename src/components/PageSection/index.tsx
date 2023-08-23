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
			{props.name !== 'contact' && (
				<LgTxt
					$colorPalette="tertiary"
					$color="neon"
					$shadow="black"
					$size="1.5em"
				>
					{props.name}
				</LgTxt>
			)}
			<Icon $colorPalette="primary" $color="neon" $shadow="drab">
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
				<ContactCard
					id={`article-contact${
						props.id ? `_id-${props.id}-${sectionId}` : sectionId
					}`}
				>
					<LgTxt $colorPalette="secondary" $color="yellow" $shadow="black">
						{props.name}
					</LgTxt>
					<Icon
						$colorPalette="tertiary"
						$color="green"
						$shadow="black"
						$size="1.7em"
					>
						{props.icons.at(0)} Email:
					</Icon>
					<SmTxt
						$colorPalette="primary"
						$color="blue"
						$size="1.5em"
						$shadow="black"
					>
						{props.content.at(0)}
					</SmTxt>
					<Icon
						$colorPalette="tertiary"
						$color="green"
						$shadow="black"
						$size="1.7em"
					>
						{props.icons.at(1)} LinkedIn:
					</Icon>
					<SmTxt
						$colorPalette="primary"
						$color="blue"
						$shadow="black"
						$size="1.5em"
					>
						{props.content.at(1)}
					</SmTxt>
					<Icon
						$colorPalette="tertiary"
						$color="green"
						$shadow="black"
						$size="1.7em"
					>
						{props.icons.at(2)} GitHub:
					</Icon>
					<SmTxt
						$colorPalette="primary"
						$color="blue"
						$shadow="black"
						$size="1.5em"
					>
						{props.content.at(2)}
					</SmTxt>
				</ContactCard>
			)}
			{props.name && typeof props.content === 'string' && (
				<Article
					id={`article-${props.name}${
						props.id ? `_id-${props.id}-${sectionId}` : sectionId
					}`}
				>
					<SmTxt
						$colorPalette="primary"
						$color="black"
						$shadow="gray"
						$font="Oxanium"
						$size="20px"
					>
						{props.content}
					</SmTxt>
				</Article>
			)}
			{props.name !== 'contact' &&
				Array.isArray(props.content) &&
				props.content.length >= 1 &&
				props.content.map((articleContent: string, idx: Key) => (
					<Article
						id={`article-${
							props.id ? `_id-${props.id}-${sectionId}` : sectionId
						}`}
						key={`article-${
							props.id ? props.id + sectionId : sectionId + idx
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
