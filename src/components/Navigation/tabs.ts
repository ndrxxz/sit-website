import { RxDotFilled } from "react-icons/rx";

import { IconType } from "react-icons";

export interface Tab {
  title: string;
  path?: string;
  id: number;
  icon?: IconType;
}

export const tabs: Tab[] = [
  {
    title: "Home",
    path: "",
    id: 1,
    icon: RxDotFilled
  },
  {
    title: "Services",
    path: "services",
    id: 2,
    icon: RxDotFilled
  },
  {
    title: "About us",
    path: "about",
    id: 3,
    icon: RxDotFilled
  }
];