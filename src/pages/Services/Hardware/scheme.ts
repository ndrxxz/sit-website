
import { MdComputer, MdMemory } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

export interface Sheme {
    id: number;
    title: string;
    description: string;
    icon: IconType;
}

export const Scheme: Sheme[] =  [
    {
        id: 1,
        title: "Custom PC Assembly",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Curabitur eget ligula.",
        icon: MdComputer
    },
    {
        id: 2,
        title: "Component Upgrades",
        description:
          "Lorem ipsum dolor sit amet, consectetur.",
        icon: MdMemory
    },
    {
        id: 3,
        title: "Inventory Management",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Curabitur eget.",
        icon: BsBoxSeam
    },
    { 
        id: 4,
        title: "Deep Cleaning",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        icon: HiSparkles
    }
];
