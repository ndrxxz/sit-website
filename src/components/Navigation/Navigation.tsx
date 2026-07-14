import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            type: "spring",
            stiffness: 300,
            damping: 10,
        },
    };

    return (
        <>
            
            <div className="md:container md:mx-auto md:px-2 w-full">
                <div className="flex md:h-14 h-10 items-center justify-center">
                    <ul className={style.unOrderList}>

                        {/* Logo */}
                        <li className="shrink-0 px-2">
                            <Link to="/" aria-label="Logo">
                                <SiteLogo className="min-h-10 min-w-10 shadow-sm" />
                            </Link>
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
                                                    <RxDotFilled
                                                        className={`
                                                            hidden
                                                            md:inline
                                                            transition-opacity
                                                            duration-300

                                                            opacity-0
                                                            group-hover:opacity-100

                                                            ${
                                                                isActive
                                                                    ? "opacity-100"
                                                                    : ""
                                                            }
                                                        `}/>

                                                    <span className="hidden md:flex">
                                                        {title}
                                                    </span>

                                                    {/* Mobile */}
                                                    <div className="flex flex-col gap-1 items-center justify-center">
                                                        {Icon && (
                                                            <Icon
                                                                className="flex md:hidden"
                                                                size={18}
                                                            />
                                                        )}
                                                        <span className="md:hidden flex text-[10px]">
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