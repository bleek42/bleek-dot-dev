import { Fragment, Suspense, type Key } from 'react';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';

import PageSection from '@/components/PageSection';
import { type AllProjectsWhereQuery } from '@/graphql/queries/hygraph';
import { allProjectsQuery } from '@/graphql/client';

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Fragment>
			{props.result.projects.length <= 0 && (
				<PageSection
					id={'projects-loading'}
					name={'loading...'}
					description={'please wait...'}
				/>
			)}
			{props.result.projects &&
				Array.isArray(props.result.projects) &&
				props.result.projects.length >= 1 &&
				props.result.projects.map(
					(item: AllProjectsWhereQuery['projects'][number]) => (
						<PageSection
							key={item.id as Key}
							id={item.title}
							name={item.title}
							description={item.description}
							content={[...item.sourceCode]}
							icon={null}
							image={item.screenShots}
						/>
					),
				)}
			{!props.result.projects && (
				<PageSection
					key={'err-projects'}
					id={'err-projects'}
					name={'err-projects'}
					description={'Error loading projects!'}
					content={'please refresh & try again...'}
					icon={null}
				/>
			)}
		</Fragment>
	);
}

export const getStaticProps: GetStaticProps<{
	result: AllProjectsWhereQuery;
}> = async () => {
	const result: Awaited<AllProjectsWhereQuery> =
		await allProjectsQuery.AllProjectsWhere({
			'stage': 'PUBLISHED',
			'first': 10,
		});

	return {
		props: {
			result,
		},
	};
};
