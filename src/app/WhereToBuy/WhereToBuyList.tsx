"use client";
import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { WhereToBuySerie } from "./WhereToBuySerie";
import { useState } from "react";
// muligens release date og genere senere

type SortMode = "Serie" | "Author";
type SortDirection = "Ascending" | "Descending";

interface WhereToBuyListProps
{
    buyArray: WhereToBuySeriesProps[],
}

interface SortHandler
{
    mode: SortMode,
    list: WhereToBuySeriesProps[],
    direction: SortDirection;

}

export function WhereToBuyList({ buyArray }: WhereToBuyListProps)
{
    const [sortHandler, setSortHandler] = useState<SortHandler>({ mode: "Serie", list: buyArray, direction: "Ascending" });
    const animInc = 200;
    return (
        <ul className="buySeriesList">

            {
                buyArray.map((item, index) =>
                    <WhereToBuySerie key={index + "WhereToBuySerieComponent"} serieSelected={item.serieSelected}
                        authorsStrArray={item.authorsStrArray} bookList={item.bookList} animationDelay={`${animInc * index}ms`} />

                )
            }
        </ul>


    );
};