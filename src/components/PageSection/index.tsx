import { useId, type Key, Fragment } from 'react';
import Image from 'next/image';
import bleekImg from '/public/images/brandon-mask.png';

import { type SectionComponent } from '@/interfaces/Component';
import { type SectionProps, Section, Article, ContactCard } from './Section';
import { Icon, LgTxt, MdTxt, SmTxt } from '@/components/common';
// import { Details, Summary } from '@/components/common/Details';

export default function PageSection(props: SectionProps & SectionComponent) {
	// console.log({ 'page-section-props': props });
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
					$size="2.2em"
					$flex="0 1 2vh"
				>
					{props.name}
				</LgTxt>
			)}
			<Icon $colorPalette="primary" $color="drab" $shadow="black" $size="2em">
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

			{props.name === 'contact' &&
				props.content &&
				Array.isArray(props.icons) &&
				props.icons.length === 3 && (
					<ContactCard
						id={`article-contact${
							props.id ? `_id-${props.id}-${sectionId}` : sectionId
						}`}
					>
						<LgTxt
							$colorPalette="secondary"
							$color="yellow"
							$shadow="black"
							$size="2.2em"
						>
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
							$colorPalette="secondary"
							$color="blue"
							$shadow="black"
							$size="1.7em"
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
							$colorPalette="secondary"
							$color="blue"
							$shadow="black"
							$size="1.7em"
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
							$colorPalette="secondary"
							$color="blue"
							$shadow="black"
							$size="1.7em"
						>
							{props.content.at(2)}
						</SmTxt>
					</ContactCard>
				)}
			{props.name !== 'contact' && typeof props.content === 'string' && (
				<Article
					id={`article-${props.name}${
						props.id ? `_id-${props.id}-${sectionId}` : sectionId
					}`}
				>
					<SmTxt
						$colorPalette="tertiary"
						$color="black"
						$shadow="cyan"
						$size="1.2em"
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
