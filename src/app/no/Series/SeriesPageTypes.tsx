import type { Series } from "@/types/booktypes";

export interface SeriesBigCardProps {
 
     authors : string[],
     seriesName : string,
     seriesImageUrl : string,
     seriesFact : string, 
     seriesTeaser : string
     genre : string[],
    animationDelay? : string
}


export interface SeriesPageListProps
{
    seriesArray: Series[];
}


