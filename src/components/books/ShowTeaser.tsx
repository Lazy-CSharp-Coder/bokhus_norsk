"use client";
import type { ShowTeaserProps } from "@/types/booktypes";

import { useExitOnEsc } from "../hooks/useExitOnEsc";
import { useIntroState } from "@/globalStates";


export function ShowTeaser({seriesTeaser} : ShowTeaserProps)
{
    const exitTeaser = useExitOnEsc;
    const intro = useIntroState();

    exitTeaser(() => intro.setIntroBeenPlayed("played"));
    
    return(
        <div className="teaserDiv">
             <h3 className="teaserText" onAnimationEnd={() => intro.setIntroBeenPlayed("played")}>
            {seriesTeaser} </h3>
        </div>
      
    )
}