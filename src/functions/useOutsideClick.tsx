import { useEffect } from "react";

export function useOutsideClick(handleOutsideClick : (event: MouseEvent) => void)
{
    
    return(
    
        useEffect(() => {
            document.addEventListener("mousedown", handleOutsideClick);
            return () => document.removeEventListener("mousedown", handleOutsideClick);
    
        },[handleOutsideClick])); 
}