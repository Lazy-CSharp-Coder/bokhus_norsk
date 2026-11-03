"use client";
import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { WhereToBuySerie } from "./WhereToBuySerie";
import { useState } from "react";
import "./WhereToBuyList.module.css";
import { BsPersonFill } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { PiArrowFatLineDownFill} from "react-icons/pi";
// muligens release date og genere senere
import styles from "./WhereToBuyList.module.css";

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
    const [waitForMainAnim, setWaitForMainAnim] = useState<number>(1200);
    const [isSortMenuOpen, setSortMenuOpen] = useState<boolean>(false);
    const animInc = 300;
  
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
        <ul className={styles.buySeriesList}>
            <div className={`${styles.sortDiv} fadeInFromBelowAnim`} style={{animationDelay: `${waitForMainAnim}ms`}} ><div className={styles.sortHeader}>SORTERINGSALTERNATIVER<span onClick={() => setSortMenuOpen((prev) => !prev)}><PiArrowFatLineDownFill size="1.4rem" className={`${isSortMenuOpen ? styles.sortUp : styles.sortDown} ${styles.sortCollapseIcon} fadeInAnim`}/></span></div>
              {isSortMenuOpen &&
                <div className={styles.sortButtonContainer}>
                    <div className={styles.modeDiv}>
                        <button className={`${styles.sortButton} ${mode == "Serie" && "isActive"}`} onClick={() => mode != "Serie" && handleSortClick("Serie")}><TbBooks size="1.2rem" className={styles.sortIcon}/> etter Serienavn</button>
                        <button className={`${styles.sortButton} ${mode == "Author" && "isActive"}`} onClick={() => mode != "Author" && handleSortClick("Author")}><BsPersonFill size="1.2rem" className={`${styles.sortIcon}`}/> etter Forfatter</button>
                        </div>
                        <div className={styles.sortStatusDiv}>
                            {/* <span className="sortTag">CURRENT : </span> */}
                            <span key={mode} className={`${styles.sortCurrentMode} ${styles.sortModeAnim}`}>{mode == "Serie" ? <TbBooks size="1.5rem" className={styles.sortIconStatus}/> :<BsPersonFill size="1.5rem" className={styles.sortIconStatus}/> }</span>
                            <span key={direction} className={`${styles.sortCurrentDirection} ${styles.sortModeAnim}`}> {direction == "Ascending" ? <AiOutlineSortAscending size="1.5rem"className={styles.sortIconStatus}/> :<AiOutlineSortDescending size="1.5rem" className={styles.sortIconStatus}/>  }</span>


                        </div>
                    <div className={styles.directionDiv}>
                        <button className={`${styles.sortButton} ${direction == "Ascending" && styles.isActive}`} onClick={() => direction != "Ascending" && handleSortClick(mode, "Ascending")}><AiOutlineSortAscending size="1.2rem" className={styles.sortIcon}/> Stigende</button>
                        <button className={`${styles.sortButton} ${direction == "Descending" && styles.isActive}`} onClick={() => direction != "Descending" && handleSortClick(mode, "Descending")}><AiOutlineSortDescending size="1.2rem" className="sortIcon"/>Synkende</button>
                    </div>

                </div>
}

            </div>

            {
                sortHandler.list.map((item, index, array) =>
                    <WhereToBuySerie key={index + "WhereToBuySerieComponent" + sortHandler.mode + sortHandler.direction} serieSelected={item.serieSelected}
                        authorsStrArray={item.authorsStrArray} bookList={item.bookList} animationDelay={(animInc * index)+waitForMainAnim} setWaitForMainAnim={index== array.length-1 ? setWaitForMainAnim : undefined}/>

                )
            }
        </ul>


    );
};