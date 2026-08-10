import type { ExpandingLineProps } from "@/types/types";
import styles from "./ExpandingLine.module.css";

export function ExpandingLine({ width, lineSize, lineType, color, animationDelay , animationDuration} : ExpandingLineProps)
{
    const borderString : string =  `${lineSize}px ${lineType ? lineType : "solid"} ${color ? color : ""}`

    return(
        <div className={styles.expandingLineDiv} style={{borderTop : borderString, width: width ? width : "100%", animationDuration : animationDuration ? animationDuration : "1s", animationDelay : animationDelay ? animationDelay : "0s"}}>

        </div>


    )
}