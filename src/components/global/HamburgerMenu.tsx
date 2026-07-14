"use client";

import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { HeaderMenuItemProps } from "@/types/types";

interface HamburgerMenuProps {
    menuItems : HeaderMenuItemProps[]
}


type HamburgerMenuState = "showing" | "animatingOut" | "hiding";

export function HamburgerMenu({ menuItems }: HamburgerMenuProps)
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

                    {menuItems?.map((item, index) =>

                        <Link key={item.name + index} className="headerMenuItemHamburger" href={item.pageLink}><item.IconToUse size={item.size}/>   {item.name}</Link>)
                    }
                </nav>}

        </>
    );
}
