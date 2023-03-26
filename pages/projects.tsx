import { AggregateError } from '@graphql-tools/utils';
import { GraphQLError } from 'graphql';
import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

import Header from '../components/Header';
import Meta from '../components/Meta';
import NavMenu from '../components/NavMenu';
import Section from '../components/Section';
import SectionDetails from '../components/SectionDetails';

import { GraphCMS } from './api/lib/graphcms.client';

const Projects: NextPage = ({ projects }): JSX.Element => {
  return (
    <div>
      <ul>
        <li>No preview...</li>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async ({ params = '', preview = false }) => {
  const projects = await GraphCMS.AllProjects();
  console.log(projects);
  if (!preview || !projects) {
    return {
      props: {
        message: 'no preview',
      },
    };
  }
  console.log(projects);
  return {
    props: {
      preview,
      ...projects,
    },
  };
};

export default Projects;
