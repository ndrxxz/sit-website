import { useState } from "react";
import { motion } from "motion/react";
import { Link, NavLink } from "react-router-dom";

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
            <header className={style.main}>
                <div className="container mx-auto px-2">
                    <div className="flex h-12 items-center justify-center px-3">
                        <ul className={style.unOrderList}>
                            <li className="px-2">
                                <Link to="/" aria-label="Logo">
                                    <SiteLogo className="min-h-10 min-w-10 shadow-sm" />
                                </Link>
                            </li>

                            {tabs.map((tab) => {
                                const {id, title, path, icon: Icon, type} = tab;

                                return (
                                    <li key={id}>
                                        <motion.div {...tapAnimation}>
                                            <NavLink
                                                to={path}
                                                className={({ isActive }) =>
                                                    `${style.navLink} group ${
                                                        isActive
                                                            ? "active"
                                                            : ""}`}>
                                                {({ isActive }) => (
                                                    <>
                                                        {Icon && (
                                                            <Icon
                                                                className={`
                                                                transition-opacity duration-300
                                                                ${
                                                                    id <= 3? "opacity-0 group-hover:opacity-100": "opacity-100"
                                                                }
                                                                ${
                                                                    isActive? "opacity-100": ""
                                                                }
                                                            `}
                                                            />
                                                        )}

                                                        <span>{title}</span>
                                                    </>
                                                )}
                                            </NavLink>
                                        </motion.div>
                                    </li>
                                );
                            })}
                            <li>
                                <CatalogueBtn />
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
}