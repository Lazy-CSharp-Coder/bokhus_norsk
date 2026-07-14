
import Link from "next/link";
import type { HeaderMenuItemProps } from "@/types/types";

export function HeaderMenuItem({item }:{item : HeaderMenuItemProps})
{
    const{ icon, pageLink, size, name} = item;
    const IconToUse = icon;
    return (
        <Link className="headerMenuItem" href={pageLink}> <IconToUse size={size} /> {name}</Link>

    );
}