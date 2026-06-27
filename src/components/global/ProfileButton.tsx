import Link from "next/link";
import { FaUserPen } from "react-icons/fa6";
export function ProfileButton()
{
    return(
        <button className="profileButton">
            <Link href="/Register"><FaUserPen size="1.8rem"/></Link>
        </button>
    )
}