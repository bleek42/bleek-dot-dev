import { FcNfcSign } from 'react-icons/fc';
import { RiBracesFill } from 'react-icons/ri';
import { VscArchive, VscCode, VscCommentDiscussion, VscSymbolArray } from 'react-icons/vsc';

import { NavItem } from '@types/NavItem';

const navList: Array<NavItem> = [
  {
    id: 0,
    title: 'Home',
    path: '/home',
    icon: <RiBracesFill />,
    url: `https://bleek.tech${this.path}`,
  },
  {
    id: 1,
    title: 'About',
    path: '/about',
    icon: <VscSymbolArray />,
    url: 'https://bleek.tech/about'
  },
  {
    id: 2,
    title: 'Contact',
    path: '/contact',
    icon: <VscCommentDiscussion />,
    url: `https://bleek.tech${this.path}`
  },
  {
    id: 3,
    title: 'Projects',
    path: '/projects',
    icon: <VscCode />,
    url: `https://bleek.tech${this.path}`
  },
  {
    id: 4,
    title: 'Blog',
    path: '/blog',
    icon: <VscArchive />,
    url: `https://bleek.tech${this.path}`
  },
  {
    id: 5,
    title: 'Not Found',
    path: '/not-found',
    icon: <FcNfcSign />,
    url: `https://bleek.tech${this.path}`
  }
];

export default navList;
