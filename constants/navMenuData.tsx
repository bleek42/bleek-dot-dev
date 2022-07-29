import { RiBracesFill } from 'react-icons/ri';
import { VscArchive, VscCode, VscCommentDiscussion, VscSymbolArray } from 'react-icons/vsc';

import { NavMenuItem } from '../types/interfaces/NavMenuItem';

// export class NavMenuData implements NavMenuItem {
//   public title: string;
//   public path: string;
//   public icon: IconType | ReactSVGElement;
//   constructor(title, path, icon) {
//     this.title = title;
//     this.path = path;
//     this.icon = icon;
//   }
// }

export const navMenuData: Array<NavMenuItem> = [
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
  {
    title: 'Blog',
    path: '/blog',
    icon: <VscArchive />,
  },
];
