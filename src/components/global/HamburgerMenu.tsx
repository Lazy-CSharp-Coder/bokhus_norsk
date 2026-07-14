"use client";

import { useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


import { HeaderMenuItem } from "./HeaderMenuItem";
import { menuItems } from "./HeaderMenuItemsDef";
import { useOutsideClick } from "@/functions/useOutsideClick";



type HamburgerMenuState = "showing" | "animatingOut" | "hiding";

export function HamburgerMenu()
{
    const [menuState, setMenuState] = useState<HamburgerMenuState>("hiding");

     const headerRef = useRef<HTMLDivElement>(null);

    
    const handleOutsideClick = (e : MouseEvent) =>
    {
        let shallClose = false;
        if (headerRef.current && headerRef.current.contains(e.target as Node)) shallClose = false;
        else shallClose = true; 
        if(shallClose && menuState =="showing") setMenuState("animatingOut");
    };

    const handleClick = ()=>
    {
        if(menuState == "hiding") setMenuState("showing");
        else if(menuState == "showing") setMenuState("animatingOut");

    }
    useOutsideClick(handleOutsideClick);
    return (
        <>
            <span className="burgerSpan" onClick={handleClick}>
                <GiHamburgerMenu size="2.5rem" />
            </span>
            {menuState!= "hiding" &&
                <nav ref={headerRef} onAnimationEnd={() => menuState == "animatingOut" && setMenuState("hiding")} className={`menuItemsHamburgerDiv flex ${menuState == "showing" ? "slideInRightAnim" : "slideOutRightAnim"}`}>

                    {menuItems.map((_, index) =>

                       <HeaderMenuItem index={index} className="hamburgerItem" iconClassName="hamburgerIcon"/>
                    )}
                </nav>}

        </>
    );
}
