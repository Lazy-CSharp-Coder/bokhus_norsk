import type { BackgroundImageProps } from "../../types/types";

export function BackgroundImage({ className, src, animType, animDuration, animDelay }: BackgroundImageProps)
{
    let animCSSClass: string = className;

    switch (animType)
    {
        case "RotateIn": animCSSClass += " rotateInAnim";
            break;

        case "FadeIn": animCSSClass += " fadeInAnim";
            break;

        case "ScaleIn": animCSSClass += " scaleInAnim";
            break;

        default: animCSSClass += " fadeInAnim";
            break;
    }

    return (
        <div className={animCSSClass} style={{ animationDuration: animDuration ? animDuration : "1s", animationDelay: animDelay ? animDelay : "0s", backgroundImage: `url(${src}` }}>

        </div>
    );
}

