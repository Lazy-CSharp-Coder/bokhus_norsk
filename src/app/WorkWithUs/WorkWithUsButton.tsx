"use client";

import { WorkWithUs } from "./page";

interface WorkWithUsButtonProps 
{
    subject : WorkWithUs,
    handleClick : (theme : WorkWithUs) => void
}

export function WorkWithUsButton({subject, handleClick} : WorkWithUsButtonProps)
{
    return(
        <button className="workWithUsButton" onClick={() => handleClick(subject)}>
            {subject.theme}
        </button>
    )
}