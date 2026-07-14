
import Link from "next/link";
import type { HeaderMenuItemProps } from "@/types/types";

export function HeaderMenuItem({name, icon, size, pageLink }: HeaderMenuItemProps)
{
    const IconToUse = icon;
    return (
        <Link className="headerMenuItem" href={pageLink}> <IconToUse size={size} /> {name}</Link>

    );
}