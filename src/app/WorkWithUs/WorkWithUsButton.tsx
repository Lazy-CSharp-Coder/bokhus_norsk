"use client";

import { WorkWithUs } from "./page";

interface WorkWithUsButtonProps 
{
    subject : WorkWithUs,
    handleClick : (theme : WorkWithUs) => void,
    anmiationDelay? : string
}

export function WorkWithUsButton({subject, handleClick, anmiationDelay} : WorkWithUsButtonProps)
{
    return(
        <button className="workWithUsButton fadeInFromLeftAnim" onClick={() => handleClick(subject)} style={{animationDelay : anmiationDelay ? anmiationDelay : "0s" }}>
            {subject.theme}
        </button>
    )
}