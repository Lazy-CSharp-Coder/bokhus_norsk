"use client";
import { useRouter } from "next/router";
import { BiSolidError } from "react-icons/bi";

interface ErrorBokhusProps 
{
    msg : string,
    url ? : string,
    buttonText?: string
}

export function ErrorBokhus({msg, url, buttonText} : ErrorBokhusProps)
{
    const router = useRouter();
    return(
        <div className="errorBokhusDiv">
            <BiSolidError className="errorBokhusIcon" size="5rem"/>
            {msg}
            {url && 
             <button onClick={() =>  router.push(url) } className="submitButton errorButton">{buttonText ? buttonText : "Back to Home Page"}</button>
            }
        </div>
    )
}