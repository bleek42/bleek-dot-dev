export type PageId = 1 | 2 | 3 | 4 | 5;
export type PageTitle = 'Home' | 'About' | 'Contact' | 'Projects' | 'Resume';
export type PagePath = '/home' | '/about' | '/contact' | '/projects' | '/resume';
export type PageIcon =
  | ' \udb83\udd84 '
  | ' \udb84\udcf6 '
  | ' \udb84\udcdc '
  | ' \udb84\udcd6 '
  | ' \udb84\udcf8 '
  | ' \ue601 '
  | null;

export interface NavLink<PageId, PageTitle, PagePath, PageIcon> {
  id: PageId;
  title: PageTitle;
  path: PagePath;
  icon: PageIcon;
}

export const navLinks: NavLink<PageId, PageTitle, PagePath, PageIcon>[] = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    icon: ' \udb83\udd84 ',
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
    icon: ' \udb84\udcf6 ',
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact',
    icon: ' \udb84\udcdc ',
  },
  {
    id: 4,
    title: 'Projects',
    path: '/projects',
    icon: ' \udb84\udcd6 ',
  },
  {
    id: 5,
    title: 'Resume',
    path: '/resume',
    icon: ' \ue601 ',
  },
];
