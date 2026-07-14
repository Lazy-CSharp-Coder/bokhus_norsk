
import Link from "next/link";
import type { HeaderMenuItemProps } from "@/types/types";

export function HeaderMenuItem({name, IconToUse, size, pageLink }: HeaderMenuItemProps)
{
    return (
        <Link className="headerMenuItem" href={pageLink}> <IconToUse size={size} /> {name}</Link>

    );
}