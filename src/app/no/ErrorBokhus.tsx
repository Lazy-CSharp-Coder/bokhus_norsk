"use client";
import { BokHusCom } from "@/components/common/BokHusCom";
import { useRouter } from "next/navigation";
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
           
            <BiSolidError className="errorBokhusIcon" size="8rem"/><span style={{opacity: 0.8}} > <BokHusCom/> </span>
            {msg} 
            {url && 
             <button onClick={() =>  router.push(url) } className="submitButton errorButton">{buttonText ? buttonText : "Back to Home Page"}</button>
            }
        </div>
    )
}