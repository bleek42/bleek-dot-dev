import { AggregateError } from '@graphql-tools/utils';
import { GraphQLError } from 'graphql';
import type { GetStaticProps, NextPage } from 'next';
import { AppInitialProps } from 'next/app';
import Error from 'next/error';
import React, { Fragment, useState } from 'react';

import Header from '../components/Header';
import Meta from '../components/Meta';
import NavMenu from '../components/NavMenu';
import Section from '../components/Section';
import { ProjectItem } from '../types/interfaces/ProjectItem';

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
