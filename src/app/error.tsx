"use client";
import { useEffect } from "react";
import styles from "./error.module.css";

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
        <div className={styles.errorDiv}>
            <BiSolidError size="8rem" className={styles.errorIcon}/>
            <h2 className={styles.errorHeading}>Something went wrong!</h2>
             {error.message}
            <button onClick={() => reset()} className={`submitButton ${styles.errorButton}`} >TRY AGAIN</button>
        </div>
    )

}