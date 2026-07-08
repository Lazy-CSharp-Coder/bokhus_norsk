"use client";
import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { WhereToBuySerie } from "./WhereToBuySerie";
import { useState } from "react";
import "./WhereToBuyList.module.css";
import { BsPersonFill } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { PiArrowFatLineDownFill } from "react-icons/pi";
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
    const [isSortMenuOpen, setSortMenuOpen] = useState<boolean>(false);
    const animInc = 200;

    const handleSortClick = (mode: SortMode, direction?: SortDirection) =>
    {
        const directionToUse: SortDirection = direction ? direction : sortHandler.direction;
        switch (mode)
        {
            case "Serie":
                if (directionToUse == "Ascending") setSortHandler(({ direction: "Ascending", mode: "Serie", list: [...buyArray].sort((a, b) => a.serieSelected.seriesName.localeCompare(b.serieSelected.seriesName)) }));
                else setSortHandler((prev) => ({ direction: "Descending", mode: "Serie", list: [...buyArray].sort((a, b) => b.serieSelected.seriesName.localeCompare(a.serieSelected.seriesName)) }));

                console.log("sorting by series");
                break;

            case "Author": if (directionToUse == "Ascending") setSortHandler(({ direction: "Ascending", mode: "Author", list: [...buyArray].sort((a, b) => a.authorsStrArray[0].localeCompare(b.authorsStrArray[0])) }));
            else setSortHandler(({ direction: "Descending", mode: "Author", list: [...buyArray].sort((a, b) => b.authorsStrArray[0].localeCompare(a.authorsStrArray[0])) }));
                console.log("sorting by author");
                break;

            default: break;
        }

    };


    const { mode, direction} = sortHandler;
    return (
        <ul className="buySeriesList">
            <div className="sortDiv"><div className="sortHeader">SORT OPTIONS <span onClick={() => setSortMenuOpen((prev) => !prev)}><PiArrowFatLineDownFill size="1.4rem" className={`${isSortMenuOpen ? "sortUp" : "sortDown"} sortCollapseIcon fadeInAnim`}/></span></div>
              {isSortMenuOpen &&
                <div className="sortButtonContainer">
                    <div className="modeDiv">
                        <button className={`sortButton ${mode == "Serie" && "isActive"}`} onClick={() => mode != "Serie" && handleSortClick("Serie")}><TbBooks size="1.2rem" className="sortIcon"/> by Serie</button>
                        <button className={`sortButton ${mode == "Author" && "isActive"}`} onClick={() => mode != "Author" && handleSortClick("Author")}><BsPersonFill size="1.2rem" className="sortIcon"/> by Author</button>
                        </div>
                        <div className="sortStatusDiv">
                            {/* <span className="sortTag">CURRENT : </span> */}
                            <span key={mode} className="sortCurrentMode sortModeAnim">{mode == "Serie" ? <TbBooks size="1.5rem" className="sortIcon"/> :<BsPersonFill size="1.5rem" className="sortIcon"/> }</span>
                            <span key={direction} className="sortCurrentDirection sortModeAnim"> {direction == "Ascending" ? <AiOutlineSortAscending size="1.5rem" className="sortIcon"/> :<AiOutlineSortDescending size="1.5rem" className="sortIcon"/>  }</span>


                        </div>
                    <div className="directionDiv">
                        <button className={`sortButton  ${direction == "Ascending" && "isActive"}`} onClick={() => direction != "Ascending" && handleSortClick(mode, "Ascending")}><AiOutlineSortAscending size="1.2rem" className="sortIcon"/> Ascending</button>
                        <button className={`sortButton ${direction == "Descending" && "isActive"}`} onClick={() => direction != "Descending" && handleSortClick(mode, "Descending")}><AiOutlineSortDescending size="1.2rem" className="sortIcon"/>Descending</button>
                    </div>

                </div>
}

            </div>

            {
                sortHandler.list.map((item, index) =>
                    <WhereToBuySerie key={index + "WhereToBuySerieComponent" + sortHandler.mode + sortHandler.direction} serieSelected={item.serieSelected}
                        authorsStrArray={item.authorsStrArray} bookList={item.bookList} animationDelay={`${animInc * index}ms`} />

                )
            }
        </ul>


    );
};