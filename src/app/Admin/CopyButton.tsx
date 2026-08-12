"use client";

interface CopyButtonProps 
{
    copyToClipboard : () => void
}

export function CopyButton({copyToClipboard} : CopyButtonProps)
{
  return(
    <button className="submitButton" onClick={() => { copyToClipboard()} }>
        Copy to Clipboard
    </button>);
}