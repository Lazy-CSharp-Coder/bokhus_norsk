"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

interface ChangeBokhusDomainProps 
{
    message : string,
    linkText: string,
    stayText : string,
    domainUrl : string
}



export function ChangeBokhusDomain({ message,linkText, stayText, domainUrl} : ChangeBokhusDomainProps)
{

    const [showDialog, setShowDialog] = useState<boolean>(false);

    useEffect(() => 
    {
        const hasAcceptedCookies = localStorage.getItem("cookieConsent");
        if (hasAcceptedCookies != "true") setShowDialog(true);

    }, []);

    const handleClick = () =>
    {
        localStorage.setItem("cookieConsent", "true");
        setShowDialog(false);

    };

    if (!showDialog) return null;

    return (
        <div className={`${styles.cookieDialogContainer} fadeInFromBelowAnim`}>
            <div className={styles.cookieDialog}>
             <p className={styles.cookieText}> {message}</p>
             <div className={styles.buttonDiv}>
                    <Link href={domainUrl} className="submitButton">
                    {linkText}
                </Link>
                <button className="submitButton" onClick={handleClick}>{stayText}</button>

             </div>
              
            </div>
        </div>
    );

}