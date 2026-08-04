
import styles from   "./BackgroundImage.module.css";

type AnimTypes = "No Animation"| "RotateIn" | "FadeIn" | "ScaleIn";

interface BackgroundImageProps 
{
    className? : string,
    src? : string,
    animType?: AnimTypes,
    animDuration? : string,
    animDelay? : string
}

export function BackgroundImage({ className, src, animType, animDuration, animDelay }: BackgroundImageProps)
{
    let animCSSClass: string = className ? className : styles.backgroundImage;

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
        <div className={animCSSClass} style={{ animationDuration: animDuration ? animDuration : "1s", animationDelay: animDelay ? animDelay : "0s", backgroundImage: src?  `url(${src}` : "" }}>

        </div>
    );
}