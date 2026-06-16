"use client";

import { useState } from "react";
import type { HeaderProps } from "@/types/types"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

type HamburgerMenuState = "showing" | "animatingOut" | "hiding";

export function HamburgerMenu({ menuItems }: HeaderProps)
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
                <div onAnimationEnd={() => menuState == "animatingOut" && setMenuState("hiding")} className={`menuItemsHamburgerDiv flex ${menuState == "showing" ? "slideInRightAnim" : "slideOutRightAnim"}`}>

                    {menuItems?.map((item, index) =>

                        <Link key={item.name + index} className="headerMenuItem" href={item.pageLink}>{item.name}</Link>)
                    }
                </div>}

        </>
    );
}
