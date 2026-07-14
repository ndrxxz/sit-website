"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { VscDownload } from "react-icons/vsc";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import CatalogueFile from "@/assets/catalogue.png";
import style from "./Navigation.module.css";

export default function CatalogueButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);

        const url = new URL(window.location);
        url.searchParams.set("catalogue", "open");

        window.history.replaceState({}, "", url);
    };

    const handleClose = () => {
        setIsOpen(false);

        const url = new URL(window.location);
        url.searchParams.delete("catalogue");

        window.history.replaceState({}, "", url);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("catalogue") === "open") {
            setIsOpen(true);
        }

        const handleEscape = (e) => {
            if (e.key === "Escape") handleClose();
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    const ToolbarBtn = ({ onClick, children, label }) => (
        <motion.button
            type="button"
            aria-label={label}
            onClick={onClick}
            className={style.catalogueToolBarBtn}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
            }}
        >
            {children}
        </motion.button>
    );

    return (
        <>
            <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={style.catalogueBtn}
                onClick={handleOpen}>
                <VscDownload size={16}/>
                <span>Catalogue</span>
            </motion.button>

            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={handleClose}
                    slides={[{ src: CatalogueFile }]}
                    styles={{
                        container: {
                            background: "var(--lightbox-bg)",
                        },
                        navigationPrev: { display: "none" },
                        navigationNext: { display: "none" },
                        button: { display: "none" },
                        toolbar: { gap: "8px" },
                    }}
                    animation={{
                        fade: 300
                    }}
                    toolbar={{
                        buttons: [
                            <ToolbarBtn
                                key="download"
                                label="Download"
                                onClick={() => {
                                    const a = document.createElement("a");
                                    a.href = CatalogueFile;
                                    a.download = "";
                                    a.click();
                                }}>
                                <FiDownload size={20} />
                            </ToolbarBtn>,
                            <ToolbarBtn
                                key="close"
                                label="Close"
                                onClick={handleClose}>
                                <IoClose size={20} />
                            </ToolbarBtn>
                        ],
                    }}
                />
            )}
        </>
    );
}