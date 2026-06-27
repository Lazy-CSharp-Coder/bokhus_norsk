import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
export function ProfileButton()
{
    return(
        <button className="profileButton">
            <Link href="/Register">
            <FaUserLarge size="1.2rem" color="var(--bokhusFutureColor)"/></Link>
        </button>
    )
}