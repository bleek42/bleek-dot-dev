import { useId, type Key, Fragment } from 'react';
import Image from 'next/image';
import bleekImg from '/public/images/brandon-mask.png';

import { type SectionComponent } from '@/interfaces/Component';
import { type SectionProps, Section, Article, ContactCard } from './Section';
import { Icon, LgTxt, MdTxt, ExtLink, SmTxt } from '@/components/common';
// import { Details, Summary } from '@/components/common/Details';

export default function PageSection(props: SectionProps & SectionComponent) {
	console.log({ 'page-section-props': props });
	const sectionId = useId();
	return (
		<Section
			key={`section-${props.id ? props.id + sectionId : sectionId}`}
			id={`section-${props.id ? props.id + sectionId : sectionId}`}
		>
			<LgTxt
				$colorPalette="tertiary"
				$color="neon"
				$shadow="black"
				$size="2.2em"
				$flex="0 1 2vh"
			>
				{props.name}
			</LgTxt>

			<Icon $colorPalette="primary" $color="cyan" $shadow="black" $size="4em">
				{props.icon ?? '\uebc6'}
			</Icon>
			{!props.image && props.name === 'about' && (
				<Image
					src={bleekImg}
					alt={'brandon-mask'}
					width={400}
					height={400}
					priority
				/>
			)}

			{props.name === 'contact' &&
				props.content &&
				Array.isArray(props.icons) &&
				props.icons.length === props.content.length && (
					<ContactCard
						id={`article-contact${
							props.id ? `_id-${props.id}-${sectionId}` : sectionId
						}`}
					>
						<Icon
							$colorPalette="tertiary"
							$color="neon"
							$shadow="black"
							$size="1.6em"
						>
							{`${props.icons.at(0)}Email:`}
							<ExtLink
								$colorPalette="secondary"
								$color="blue"
								$shadow="black"
							>
								{props.content.at(0)}
							</ExtLink>
						</Icon>
						<Icon
							$colorPalette="secondary"
							$color="teal"
							$shadow="black"
							$size="1.6em"
						>
							{`${props.icons.at(1)}LinkedIn:`}
							<ExtLink
								$colorPalette="secondary"
								$color="blue"
								$shadow="black"
								$size="1em"
							>
								{props.content.at(1)}
							</ExtLink>
						</Icon>
						<Icon
							$colorPalette="tertiary"
							$color="green"
							$shadow="black"
							$size="1.6em"
						>
							{`${props.icons.at(2)}GitHub:`}
							<ExtLink
								$colorPalette="secondary"
								$color="blue"
								$shadow="black"
								$size="1em"
							>
								{props.content.at(2)}
							</ExtLink>
						</Icon>
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
				props.content.map((articleContent: string, idx: number) => (
					<Article
						id={`article-${
							props.id ? `_id-${props.id}-${sectionId}` : sectionId
						}`}
						key={`article-${
							props.id ? props.id + sectionId : sectionId + idx
						}`}
					>
						<SmTxt
							$colorPalette={'tertiary'}
							$color={'black'}
							$size={'1.3em'}
						>
							{articleContent}
						</SmTxt>
					</Article>
				))}
		</Section>
	);
}
