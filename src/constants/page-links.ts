import type { PageLink } from '@interfaces/PageLink';

export const pageLinks: PageLink[] = [
  {
    id: 1,
    title: 'Home',
    href: '/home',
    icon: ' \udb83\udd84 ',
  },
  {
    id: 2,
    title: 'About',
    href: '/about',
    icon: ' \udb84\udcf6 ',
  },
  {
    id: 3,
    title: 'Contact',
    href: '/contact',
    icon: ' \udb84\udcdc ',
  },
  {
    id: 4,
    title: 'Projects',
    href: '/projects',
    icon: ' \udb84\udcd6 ',
  },
  {
    id: 5,
    title: 'Resume',
    href: '/resume',
    icon: ' \ue601 ',
  },
  {
    id: 404,
    title: 'ERR 404: Not Found..!',
    href: '/err-notfound',
    icon: '404',
  },
  {
    id: 500,
    title: 'ERR 500: Internal Server Error',
    href: '/err-server',
    icon: '500',
  },
];
