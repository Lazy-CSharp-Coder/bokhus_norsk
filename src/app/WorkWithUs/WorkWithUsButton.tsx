"use client";

interface WorkWithUsButtonProps 
{
    theme : string,
    handleClick : (theme : string) => void
}

export function WorkWithUsButton({theme, handleClick} : WorkWithUsButtonProps)
{
    return(
        <button className="workWithUsButton" onClick={() => handleClick(theme)}>
            {theme}
        </button>
    )
}