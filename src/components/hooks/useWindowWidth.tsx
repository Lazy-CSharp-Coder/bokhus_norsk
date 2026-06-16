"use client";

import { useState, useEffect} from "react";

export function useWindowWidth()
{
    const [width, setWidth] = useState<number| null>(null);

    useEffect(() =>
    {
        const getWidth = ()=> setWidth(window.innerWidth);
        getWidth();
        window.addEventListener("resize", getWidth);
        return () =>  window.removeEventListener("resize", getWidth);
    }, []);

    return width;
    
}