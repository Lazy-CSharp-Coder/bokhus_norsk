"use client";
import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { WhereToBuySerie } from "./WhereToBuySerie";
import { useState } from "react";
import "./WhereToBuyList.module.css";
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

    const handleSortClick = (mode: SortMode, direction?: SortDirection) =>
    {
        const directionToUse: SortDirection = direction ? direction : sortHandler.direction;
        switch (mode)
        {
            case "Serie":
                if (directionToUse == "Ascending") setSortHandler(({direction : "Ascending", mode: "Serie", list: [...buyArray].sort((a, b) => a.serieSelected.seriesName.localeCompare(b.serieSelected.seriesName)) }));
                else setSortHandler((prev) => ({ direction : "Descending", mode: "Serie", list: [...buyArray].sort((a, b) => b.serieSelected.seriesName.localeCompare(a.serieSelected.seriesName)) }));

                console.log("sorting by series");
                break;

            case "Author": if (directionToUse == "Ascending") setSortHandler(({direction: "Ascending", mode: "Author", list: [...buyArray].sort((a, b) => a.authorsStrArray[0].localeCompare(b.authorsStrArray[0])) }));
            else setSortHandler(({direction:"Descending", mode: "Author", list: [...buyArray].sort((a, b) => b.authorsStrArray[0].localeCompare(a.authorsStrArray[0])) }));
                console.log("sorting by author");
                break;

            default: break;
        }

    };



    return (
        <ul className="buySeriesList">
            <div className="sortDiv">Sort by :
              <div className="sortButtonContainer">
                  <div className="modeDiv"><button className="sortButton" onClick={() => sortHandler.mode != "Serie" && handleSortClick("Serie")}>by Serie</button>
                <button className="sortButton" onClick={() => sortHandler.mode != "Author" && handleSortClick("Author")}>by Author</button></div>
                <div className="directionDiv">
       <button className="sortButton" onClick={() => sortHandler.direction != "Ascending" && handleSortClick(sortHandler.mode, "Ascending")}>Ascending</button>
                <button className="sortButton" onClick={() => sortHandler.direction != "Descending" && handleSortClick(sortHandler.mode, "Descending")}>Descending</button>
                </div>
         
              </div>

            </div>

            {
                sortHandler.list.map((item, index) =>
                    <WhereToBuySerie  key={index + "WhereToBuySerieComponent" + sortHandler.mode + sortHandler.direction} serieSelected={item.serieSelected}
                        authorsStrArray={item.authorsStrArray} bookList={item.bookList} animationDelay={`${animInc * index}ms`} />

                )
            }
        </ul>


    );
};