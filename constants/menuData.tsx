import { RiBracesFill } from 'react-icons/ri';
import { VscSymbolArray, VscCode, VscCommentDiscussion } from 'react-icons/vsc';

import { NavMenuItem } from '../types/interfaces/NavMenuItem';

export const menuData: NavMenuItem[] = [
  {
    title: 'Home',
    path: '/home',
    icon: <RiBracesFill />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <VscSymbolArray />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <VscCommentDiscussion />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <VscCode />,
  },
];
