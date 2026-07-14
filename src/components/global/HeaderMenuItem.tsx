
import Link from "next/link";
import type { HeaderMenuItemProps } from "@/types/types";

export function HeaderMenuItem({name, Icon, size, pageLink }: HeaderMenuItemProps)
{
    
    return (
        <Link className="headerMenuItem" href={pageLink}> <Icon size={size} /> {name}</Link>

    );
}