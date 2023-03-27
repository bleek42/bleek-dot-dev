import type { StyledComponentProps } from 'styled-components';
import type { PageLink } from '../interfaces/PageLink';
import { pageLinks } from '../../constants/page-links';

export type Toggle = StyledComponentProps<'span', any, any, never> & {
  toggled: boolean;
};

export type NavBarProps = JSX.IntrinsicElements['nav'] &
  Toggle & {
    pageLinks: PageLink[];
  };
