"use client";

import Link from "next/link";

import { menuItems } from "./HeaderMenuItemsDef";

interface HeaderMenuItemProps {
    index: number,
    className : string,
    iconClassName : string,
    onClick? : () => void
}

export function HeaderMenuItem({ index, className, iconClassName, onClick } :HeaderMenuItemProps)
{
    const{  pageLink,name, icon, size} = menuItems[index];  
    const link = pageLink ?? "/"
    const IconToUse = icon;
    return (
        <Link onClick={onClick} className={className} href={link}> <IconToUse size={size} className={iconClassName}/> {name}</Link>

    );
}