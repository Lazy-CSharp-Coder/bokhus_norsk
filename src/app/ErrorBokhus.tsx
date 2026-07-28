import { BiSolidError } from "react-icons/bi";

interface ErrorBokhusProps 
{
    msg : string
}

export function ErrorBokhus({msg} : ErrorBokhusProps)
{
    return(
        <div className="errorBokhusDiv">
            <BiSolidError className="errorBokhusIcon" size="5rem"/>
            {msg}
        </div>
    )
}