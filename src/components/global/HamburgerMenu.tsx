"use client";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";


import { HeaderMenuItem } from "./HeaderMenuItem";
import { menuItems } from "./HeaderMenuItemsDef";



type HamburgerMenuState = "showing" | "animatingOut" | "hiding";

export function HamburgerMenu()
{
    const [menuState, setMenuState] = useState<HamburgerMenuState>("hiding");

    const handleClick = ()=>
    {
        if(menuState == "hiding") setMenuState("showing");
        else if(menuState == "showing") setMenuState("animatingOut");

    }

    return (
        <>
            <span className="burgerSpan" onClick={handleClick}>
                <GiHamburgerMenu size="2.5rem" />
            </span>
            {menuState!= "hiding" &&
                <nav onAnimationEnd={() => menuState == "animatingOut" && setMenuState("hiding")} className={`menuItemsHamburgerDiv flex ${menuState == "showing" ? "slideInRightAnim" : "slideOutRightAnim"}`}>

                    {menuItems.map((_, index) =>

                       <HeaderMenuItem index={index} className="headerMenuItemHamburger"/>
                    )}
                </nav>}

        </>
    );
}
