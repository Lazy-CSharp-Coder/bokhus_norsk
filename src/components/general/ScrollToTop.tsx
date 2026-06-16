"use client";
import { useEffect } from "react";

export function ScrollToTop()
{

    useEffect(() => 
    {
        if (typeof window) window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return null;
      

}

