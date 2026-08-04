
"use client";
import Image from "next/image";
import styles from "./BackgroundImage.module.css";
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
    const shouldPreload = preload == undefined ? false : preload;
        
    return (
        <div className={`${styles.backgroundImageWrapper} ${className ? className : ""} ${isLoaded ? animCSSClass : "hiddenFromView"}`}
            style={{ animationDuration: animDuration ? animDuration : "1s", animationDelay: animDelay ? animDelay : "0s" }}>
   
            <Image className={styles.backgroundImage} src={src} sizes="100vw" alt={alt} fill priority={shouldPreload} loading={shouldPreload ? "eager" : "lazy"}  onLoad={() => setIsLoaded(true)} /> :
        
        </div>
    );
}

