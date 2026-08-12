"use client";

import { useState } from "react";

interface CopyButtonProps 
{
    copyString: string
}

export function CopyButton({copyString} : CopyButtonProps)
{
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const handleCopy = async (textToCopy: string) =>
    {
        try
        {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
        catch (error)
        {
            console.error("Failed to copy  : ", error);
        }
    };
  return(
    <button className="submitButton" onClick={() => handleCopy(copyString)}>
        Copy to Clipboard
    </button>);
}