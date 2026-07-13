import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

import style from "./Navigation.module.css";

import { NavLink } from "react-router-dom";
import { tabs } from "./tabs";

import { SiteLogo } from "@/components";

export default function Navigation() {

    const tapAnimation = {
        whileTap: { scale: 1.04 },
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10
        }
    };

    return (
        <>
            <header className={style.main}>
                <div className="container px-2 mx-auto">
                    <div className="flex h-12 items-center justify-center px-3">
                        <ul className={style.unOrderList}>
                            
                            <li className="px-2">
                                <a href="/" aria-label="Logo">
                                    <SiteLogo />
                                </a>
                            </li>

                            {tabs.map((tab) => {
                                const { id, title, path, icon: Icon, type } = tab;

                                return (
                                <li key={id}>
                                  {type === "button" ? (
                                        <motion.button
                                                    type="button"
                                                    whileHover={{ scale: 1.03 }}
                                                    {...tapAnimation}
                                                    aria-label="Catalogue button"
                                                    className={style.catalogueBtn}
                                                    onClick={() => {}}>

                                            {Icon && <Icon className="opacity-100" />}

                                            <span>{title}</span>
                                        </motion.button>
                                  ) : (
                                    <motion.div {...tapAnimation}>
                                        <NavLink to={path}
                                            className={({ isActive }) =>
                                            `${style.navLink} group ${isActive ? "active" : ""}`}>
                                            {({ isActive }) => (
                                            <>
                                                {Icon && (
                                                  <Icon
                                                    className={`
                                                        transition-opacity duration-300
                                                        ${id <= 3 ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
                                                        ${isActive ? "opacity-100" : ""}
                                                    `}
                                                  />
                                                )}
                                            <span>{title}</span>
                                            </>
                                        )}
                                      </NavLink>
                                    </motion.div>
                                  )}
                                </li>
                                ); // closed return

                            })}

                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
