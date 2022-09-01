import type { GetStaticProps, NextPage } from 'next';
import Error from 'next/error';

import Section from '@components/Section';
import type { ProjectItem } from '@types/ProjectItem';

import { GraphCMS } from './api/lib/graphcms.client';

type ProjectsPageProps = {
  items: ProjectItem[];
  loading: boolean;
  error: {
    hasError?: boolean;
    message?: Error | string;
  };
};

const Projects: NextPage<ProjectsPageProps> = ({ items, loading, error }: ProjectsPageProps) => {
  return (
    <div>
      <ul>
        <li>No preview...</li>
        {items.map((item, idx) => (
          <Section key={item.id} item={item} name="project-item" />
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params = '', preview = false }) => {
  const items = await GraphCMS.AllProjects();
  console.log(items);
  return {
    props: {
      items,
    },
  };
};

export default Projects;
