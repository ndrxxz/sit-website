import { RxDotFilled } from "react-icons/rx";
import { VscDownload } from "react-icons/vsc";

import { IconType } from "react-icons";

export interface Tab {
  title: string;
  path?: string;
  id: number;
  icon?: IconType;
  type: string;
}

export const tabs: Tab[] = [
  {
    title: "Home",
    path: "",
    id: 1,
    icon: RxDotFilled,
    type: "link"
  },
  {
    title: "Services",
    path: "services",
    id: 2,
    icon: RxDotFilled,
    type: "link"
  },
  {
    title: "About us",
    path: "about",
    id: 3,
    icon: RxDotFilled,
    type: "link"
  },
  {
    title: "Catalogue",
    id: 4,
    icon: VscDownload,
    type: "button"
  }
];