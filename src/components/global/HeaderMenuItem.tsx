
import Link from "next/link";

import { menuItems } from "./HeaderMenuItemsDef";

interface HeaderMenuItemProps {
    index: number,
    className : string,
    iconClassName : string
}

export function HeaderMenuItem({ index, className, iconClassName } :HeaderMenuItemProps)
{
    const{  pageLink,name, icon, size} = menuItems[index];  
    const link = pageLink ?? "/"
    const IconToUse = icon;
    return (
        <Link className={className} href={link}> <IconToUse size={size} className={iconClassName}/> {name}</Link>

    );
}