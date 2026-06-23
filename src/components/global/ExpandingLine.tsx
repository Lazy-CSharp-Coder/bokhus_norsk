import type { ExpandingLineProps } from "@/types/types";


export function ExpandingLine({ width, lineSize, lineType, color, animationDelay , animationDuration} : ExpandingLineProps)
{
    const borderString : string =  `${lineSize}px ${lineType ? lineType : "solid"} ${color ? color : ""}`

    return(
        <div className="expandingLineDiv" style={{border : borderString, width: width ? width : "", animationDuration : animationDuration ? animationDuration : "", animationDelay : animationDelay ? animationDelay : ""}}>

        </div>


    )
}