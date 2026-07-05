"use client";

import type { Series } from "@/types/booktypes";

interface SeriesPageListProps 
{
    seriesArray : Series[]
}

export function SeriesPageList({seriesArray} : SeriesPageListProps)
{
    
    return(
        <article className="seriesPageListArticle">
          <ul className="seriesList">
            {seriesArray.map((item, index) =>
              <li key={`${item.seriesName + index}`} >{item.seriesName}</li>)}
          </ul>

        </article>


    )
}