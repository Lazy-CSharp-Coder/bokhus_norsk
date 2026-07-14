
import Link from "next/link";
import { IconType } from "react-icons";

interface HeaderMenuItemProps 
{
    IconToUse: IconType;
    size: string,
    pageLink: string;
}

export function HeaderMenuItem({ IconToUse, size, pageLink }: HeaderMenuItemProps)
{
    return (
        <Link className="headerMenuItem" href={pageLink}> <IconToUse size={size} /> </Link>

    );
}