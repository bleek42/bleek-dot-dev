import { Project } from './interfaces/Project';

export type ProjectsPageProps = {
  items: Project[];
  loading: boolean;
  error: {
    hasError?: boolean;
    message?: Error | string;
  };
};
