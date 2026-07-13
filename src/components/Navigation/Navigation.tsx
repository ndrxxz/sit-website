import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

import styles from "./Navigation.module.css";

import { NavLink } from "react-router-dom";
import { tabs } from "./tabs";

import { SiteLogo } from "@/components";

export default function Navigation() {
    return (
        <>
            <section className={styles.main}>
                <ul className={styles.unOrdered}>
                    <li className="ms-2">
                        <SiteLogo />
                    </li>
                    {tabs.map(({ title, path, id, icon: Icon }) => (
                        <li key={id}>
                        {id === 4 ? (
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 1.04 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 15
                                }}
                                aria-label="Catalogue button"                                
                                className={`${styles.catalogueBtn} bg-[#121212] shadow-[inset_0_0_20px_rgba(255,255,255,0.8)] text-white`}
                                onClick={() => {
                                  
                                }}>
                                {Icon && <Icon className="opacity-100" />}
                                <span>{title}</span>
                            </motion.button>
                        ) : (
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                `${styles.navLink} group ${isActive ? "active" : ""}`}>
                                {({ isActive }) => (
                                <>
                                {Icon && (
                                  <Icon
                                    className={`
                                        transition-opacity duration-300
                                        ${id <= 3 ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
                                        ${isActive ? "opacity-100" : ""}
                                    `}/>
                                )}
                                    <span>{title}</span>
                                </>
                            )}
                            </NavLink>
                        )}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
