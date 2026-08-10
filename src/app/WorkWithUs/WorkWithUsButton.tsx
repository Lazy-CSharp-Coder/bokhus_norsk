"use client";

import { WorkWithUs } from "./page";
import styles from "./WorkWithUsButton.module.css";

interface WorkWithUsButtonProps 
{
    subject : WorkWithUs,
    handleClick : (theme : WorkWithUs) => void,
    anmiationDelay? : string
}

export function WorkWithUsButton({subject, handleClick, anmiationDelay} : WorkWithUsButtonProps)
{
    return(
        <button className={`${styles.workWithUsButton} fadeInFromLeftAnim`} onClick={() => handleClick(subject)} style={{animationDelay : anmiationDelay ? anmiationDelay : "0s" }}>
            {subject.theme}
        </button>
    )
}