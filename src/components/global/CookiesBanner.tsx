"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";
import { SubmitButton } from "../common/SubmitButton";

export function CookieBanner()
{

    const [showDialog, setShowDialog] = useState<boolean>(false);

    useEffect(() => 
    {
        const hasAcceptedCookies = localStorage.getItem("cookieConsent");
        if (!hasAcceptedCookies) setShowDialog(true);

    }, []);

    const handleClick = () =>
    {
        localStorage.setItem("cookeiConsent", "true");
        setShowDialog(false);

    };

    if (!showDialog) return null;

    return (
        <div className={`${styles.cookieDialogContainer} fadeInFromBelowAnim`}>
            <div className={styles.cookieDialog}>
             <p className={styles.cookieText}>   We use necessary cookies to ensure login and security function properly via Clerk.{' '}</p>
                <Link href="/Cookies" className={styles.linkPrivacy}>
                    Read more in our Cookie Policy.
                </Link>
                <button className="submitButton" onClick={handleClick}>I understand</button>
            </div>
        </div>
    );

}