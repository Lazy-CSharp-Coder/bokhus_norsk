
"use client";
import Image from "next/image";
import "./BackgroundImage.module.css";
import { useState } from "react";

type AnimTypes = "No Animation" | "RotateIn" | "FadeIn" | "ScaleIn";

interface BackgroundImageProps 
{
    className?: string,
    alt: string,
    src: string,
    preload?: boolean,
    animType?: AnimTypes,
    animDuration?: string,
    animDelay?: string;
}

export function BackgroundImage({ className, src, alt, preload, animType, animDuration, animDelay }: BackgroundImageProps)
{
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    let animCSSClass: string = "";
  
    switch (animType)
    {
        case "RotateIn": animCSSClass = " rotateInAnim";
            break;

        case "FadeIn": animCSSClass = " fadeInAnim";
            break;

        case "ScaleIn": animCSSClass = " scaleInAnim";
            break;

        default: animCSSClass += " fadeInAnim";
            break;
    }

    return (
        <div className={`backgrounImageWrapper ${className ? className : ""} ${isLoaded ? animCSSClass : "hiddenFromView"}`}
            style={{ animationDuration: animDuration ? animDuration : "1s", animationDelay: animDelay ? animDelay : "0s" }}>

            <Image src={src} className="backgroundImage" alt={alt} fill preload={preload ? true : false} fetchPriority={preload ? "auto" : "high"} onLoad={() => setIsLoaded(true)} />
        </div>
    );
}

