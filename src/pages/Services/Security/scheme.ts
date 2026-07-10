import { IconType } from "react-icons";

import { RiVirusLine } from "react-icons/ri";
import { MdMemory } from "react-icons/md";

export interface Sheme {
    id: number;
    title: string;
    description: string;
    icon: IconType;
}

export const Scheme: Sheme[] =  [
    {
        id: 1,
        title: "Threat Management",
        description:
          "Detect, prevent, and respond to cyber threats with continuous monitoring, advanced protection, and expert security management.",
        icon: RiVirusLine
    },
    {
        id: 2,
        title: "Backup and Recovery",
        description:
          "Ensure your business never loses valuable data. Our secure backup and disaster recovery solutions help you recover quickly from system failures, ransomware, or accidental data loss.",
        icon: MdMemory
    }
];
