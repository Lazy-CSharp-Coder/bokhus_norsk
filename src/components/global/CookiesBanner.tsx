"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export function CookieBanner()
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
             <p className={styles.cookieText}>   Vi bruker nødvendige informasjonskapsler for å sikre at innlogging og sikkerhet fungerer som de skal via Clerk.{' '}</p>
                <Link href="/Cookies" className={styles.linkPrivacy}>
                    Les mer i vår Personvernerklæring.
                </Link>
                <button className="submitButton" onClick={handleClick}>Jeg forstår</button>
            </div>
        </div>
    );

}