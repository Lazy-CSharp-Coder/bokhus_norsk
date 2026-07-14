
import Link from "next/link";

import { menuItems } from "./HeaderMenuItemsDef";

export function HeaderMenuItem({ index, className } : {index: number, className : string})
{
    const{  pageLink,name, icon, size} = menuItems[index];  
    const link = pageLink ?? "/"
    const IconToUse = icon;
    return (
        <Link className={className} href={link}> <IconToUse size={size} className="headerIcon"/> {name}</Link>

    );
}