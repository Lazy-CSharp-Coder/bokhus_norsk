"use client";

import { useState, useEffect} from "react";

export function useWindowHeight()
{
    const [height, setHeight] = useState<number| null>(null);

    useEffect(() =>
    {
        const getHeight = ()=> setHeight(window.innerHeight);
        getHeight();
        window.addEventListener("resize", getHeight);
        return () =>  window.removeEventListener("resize", getHeight);
    }, []);

    return height;
    
}