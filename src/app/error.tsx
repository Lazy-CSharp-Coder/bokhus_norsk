"use client";
import { useEffect } from "react";
import "./error.module.css";

interface ErrorProps {
    error : Error & { digest?: string},
    reset : () => void
}
import { BiSolidError } from "react-icons/bi";

export default function Error({error, reset} : ErrorProps)
{
    useEffect(() =>
    {
        console.error(error);
    },[error]);

    return(
        <div className="errorDiv">
            <BiSolidError size="5rem" className="errorIcon"/>
            <h2 className="errorHeading">Something went wrong!</h2>
            <p>Bokhus had trouble connecting to the database.</p>
            <button onClick={() => reset()} className="errorButton">Try again</button>
        </div>
    )

}