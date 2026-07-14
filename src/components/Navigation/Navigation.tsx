import { NavLink } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "motion/react";

import style from "./Navigation.module.css";

import { tabs } from "./tabs";
import { SiteLogo } from "@/components";

import CatalogueBtn from "./CatalogueBtn";

export default function Navigation() {

    const tapAnimation = {
        whileTap: { scale: 1.04 },
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 10,
        },
    };

    return (
        <>
            
            <div className="md:container md:mx-auto w-full">
                <div className="flex items-center justify-center">
                    <ul className={style.unOrderList}>

                        {/* Logo */}
                        <li className="shrink-0 px-2">
                            <a href="/" aria-label="Logo">
                                <SiteLogo className="min-h-10 min-w-10" />
                            </a>
                        </li>

                        {/* Navigation Tabs */}
                        {tabs.map((tab) => {
                            const { id, title, path, icon: Icon } = tab;

                            return (
                                <li 
                                    key={id}
                                    className="flex-1 md:flex-none">
                                    <motion.div
                                        {...tapAnimation}
                                        className="flex w-full">
                                        <NavLink
                                            to={path}
                                            className={({ isActive }) =>
                                                `${style.navLink} group ${
                                                    isActive ? "active" : ""
                                                }`
                                            }>
                                            {({ isActive }) => (
                                                <>
                                                    {/* Desktop */}
                                                    <div className="hidden md:flex items-center gap-1">
                                                        <RxDotFilled
                                                            className={`
                                                                transition-opacity
                                                                duration-300
                                                                opacity-0
                                                                group-hover:opacity-100
                                                                ${isActive ? "opacity-100" : ""}
                                                            `}
                                                        />
                                                        <span>{title}</span>
                                                    </div>

                                                    {/* Mobile */}
                                                    <div className="flex md:hidden flex-col items-center justify-center gap-1">
                                                        {Icon && <Icon size={18} />}
                                                        <span className="max-xs:hidden text-[10px]">
                                                            {title}
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </NavLink>
                                    </motion.div>
                                </li>
                            );
                        })}


                        {/* Catalogue */}
                        <li className="shrink-0 px-2">
                            <CatalogueBtn />
                        </li>

                    </ul>
                </div>
            </div>

        </>
    );
}