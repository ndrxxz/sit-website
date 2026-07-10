import { IconType } from "react-icons";

import { MdComputer, MdMemory } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { PiBroomLight } from "react-icons/pi";

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
          "Get a custom-built PC tailored to your specific needs—whether for gaming, business, graphic design, video editing, or everyday productivity. We use quality components for optimal performance and reliability.",
        icon: MdComputer
    },
    {
        id: 2,
        title: "Component Upgrades",
        description:
          "Boost your computer's speed and efficiency with professional hardware upgrades. From SSDs and RAM to graphics cards and processors, we recommend and install the right components for your system.",
        icon: MdMemory
    },
    {
        id: 3,
        title: "Inventory Management",
        description:
          "Keep track of your IT assets with organized hardware inventory management. We help businesses monitor equipment, manage warranties, and maintain accurate asset records for better operational efficiency.",
        icon: BsBoxSeam
    },
    { 
        id: 4,
        title: "Deep Cleaning",
        description:
          "Improve cooling performance and extend your computer's lifespan with professional internal cleaning. We safely remove dust buildup, replace thermal paste when needed, and optimize airflow to prevent overheating.",
        icon: PiBroomLight
    }
];
