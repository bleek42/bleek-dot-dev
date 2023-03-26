import { IconType } from "react-icons/lib";
import { RiBracesFill } from "react-icons/ri";
import { VscSymbolArray, VscCode, VscCommentDiscussion } from "react-icons/vsc";

interface INavMenuItem {
  title: string;
  path: string;
  icon: IconType | any;
}

export const menuData: INavMenuItem[] = [
  {
    title: "Home",
    path: "/home",
    icon: <RiBracesFill />,
  },
  {
    title: "About",
    path: "/about",
    icon: <VscSymbolArray />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <VscCommentDiscussion />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <VscCode />,
  },
];
