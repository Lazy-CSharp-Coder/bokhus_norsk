"use client";

import { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


import { HeaderMenuItem } from "./HeaderMenuItem";
import { menuItems } from "./HeaderMenuItemsDef";
import { useOutsideClick } from "@/functions/useOutsideClick";
import styles from "./HamburgerMenu.module.css";
import { BokHusCom } from "../common/BokHusCom";
import Link from "next/link";
import { ExpandingLine } from "../common/ExpandingLine";
type HamburgerMenuState = "showing" | "animatingOut" | "hiding";

export function HamburgerMenu()
{
    const [menuState, setMenuState] = useState<HamburgerMenuState>("hiding");

    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() =>
    {
        if (headerRef.current)
            if (menuState == "showing")
            {
                document.body.classList.add(styles.hamMenuOpen);

            }
            else 
            {
                document.body.classList.remove(styles.hamMenuOpen);

            }
        return () => document.body.classList.remove(styles.hamMenuOpen);


    }, [menuState]);


    const handleOutsideClick = (e: MouseEvent) =>
    {
        let shallClose = false;
        if (headerRef.current && headerRef.current.contains(e.target as Node)) shallClose = false;
        else shallClose = true;
        if (shallClose && menuState == "showing") setMenuState("animatingOut");
    };

    const handleClick = () =>
    {
        if (menuState == "hiding") setMenuState("showing");
        else if (menuState == "showing") setMenuState("animatingOut");

    };
    useOutsideClick(handleOutsideClick);


    return (
        <>
            <span className={styles.burgerSpan} onClick={handleClick}>
                <GiHamburgerMenu size="2.5rem" />
            </span>
            {menuState != "hiding" &&
                <nav
                    ref={headerRef}
                    onAnimationEnd={() => menuState == "animatingOut" && setMenuState("hiding")}
                    className={`${styles.menuItemsHamburgerDiv} flex ${menuState == "showing" ? "slideInRightAnim" : "slideOutRightAnim"}`}
                    onClick={handleClick}
                    style={{ maxHeight: "calc(100vh - 6rem)", overflowY: "auto" }}
                >
                    {menuItems.map((_, index) =>
                        <HeaderMenuItem key={"#HamItem" + index} index={index} className={styles.hamburgerItem} iconClassName={styles.hamburgerIcon} />
                    )}
                    <ExpandingLine lineSize={1} animationDuration="0s"/>
                    <a className={`${styles.flagLink} fadeInAnim`} href="https://www.bokhus.com">
                        <img className={`${styles.flagIcon} fadeInAnim`} src="icons/ENG.png" />
                        <BokHusCom /> 
                    </a>
                </nav>}

        </>
    );
}
