import React from 'react';
import { VscCommentDiscussion, VscCode, VscSymbolArray } from 'react-icons/vsc';
import { RiBracesFill } from 'react-icons/ri';

// class NavLink {
//   constructor(id, title, path, icon) {
//     this.id = id;
//     this.title = title;
//     this.path = path;
//     this.icon = icon;
//   }
// }

// const home = new NavLink(1, 'Home', '/', <RiBracesFill />);

export const navLinks = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    icon: <RiBracesFill />,
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
    icon: <VscSymbolArray />,
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact',
    icon: <VscCommentDiscussion />,
  },
  {
    id: 4,
    title: 'Projects',
    path: '/projects',
    icon: <VscCode />,
  },
];
