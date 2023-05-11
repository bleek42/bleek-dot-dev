// import * as fs from 'fs/promises'
// import * as dotenv from 'dotenv';
// import * as path from 'path';
import type { PatchedRequestInit } from 'graphql-request/dist/types';
import type { Project, ImageAsset, ProjectQuery } from '@interfaces/Project';

import { useReducer, useEffect } from 'react';
import { GraphQLError } from 'graphql';

import { type DocumentType, graphql } from '@api/graphql';
import { gql, request, type RequestDocument } from 'graphql-request';

// <TDoc, TVars>
// document: TypedDocumentNode<TDoc>,
// ...[variables]: TVars extends Record<keyof TVars, unknown>
//   ? Record<keyof TVars, unknown>
//   : [TVars]

const allProjectsQuery = async () => {
  const query = gql`
    query AllProjects {
      projects {
        title
        description
        active
        id
        link
        sourceCode
        techStack
        version
        createdAt
        updatedAt
        screenShots {
          fileName
          id
          mimeType
          url
        }
      }
    }
  `;

  const headers: HeadersInit = {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HYGRAPHCDN_AUTH_TOKEN}`,
    'content-type': 'application/json',
    'credentials': 'include',
    'cache': 'force-cache',
    'mode': 'cors',
  };

  try {
    const res = await request(
      `${process.env.NEXT_PUBLIC_HYGRAPHCDN_BASE_URL}/content/cl2jezykc0li901yx24p50f8f/master`,
      query,
      [],
      headers
    );
    console.log(res);
    return res;
  } catch {
    throw new GraphQLError('GQL ERR: Hygraph request failed!');
  }
};

export default allProjectsQuery;
