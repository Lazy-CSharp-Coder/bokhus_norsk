"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/functions/urlFor";
import "./WhereToBuySerie.module.css";
import { ByAuthor } from "@/components/common/ByAuthor";
import { ImBooks } from "react-icons/im";
import { numberToWords } from "convert-number-to-words";
import { BookAvailableIn } from "@/components/common/BookAvailableIn";

import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { PiGlobeSimpleXLight, PiArrowFatLineDownLight } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import styles from "./WhereToBuySerie.module.css";

type SerieListState = "Open" | "Closed";

export function WhereToBuySerie({ serieSelected, authorsStrArray, bookList}: WhereToBuySeriesProps)
{
  const [seriesListState, setSeriesListState] = useState<SerieListState>("Closed");

const animationDelay = 1200;
  const listHeaderRef = useRef<HTMLDivElement>(null); 
  const handleHeaderClick = () =>
  {
    setSeriesListState((prev) =>
    {

      // if (prev == "Open" && listHeaderRef.current)
      // {
      //   requestAnimationFrame(() =>
      //   {
      //     listHeaderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      //   });

      // }
      return prev == "Open" ? "Closed" : "Open";
    });

  };


  const handleLinkClick = (url: string | undefined) =>
  {
    if (url != undefined) window.open(url, '_blank', 'noopener,noreferrer');
    else console.log("No buy link url defined for book.");
  };

  const getBookNumberInString = (numberInSeries: number): string =>
  {
    const tempStr = numberToWords(numberInSeries);
    return tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
  };

  const animInc = 200;


  return (
    <article className={`${styles.whereToBuySerieArticle}`}>
      <div className={styles.whereToBuySerieHeadingDiv} ref={listHeaderRef} onClick={handleHeaderClick}>
        <div className={styles.whereToBuyIconInfoWrapper}>
          <ImBooks size="4.4rem" className={styles.buyBooksIcon} />
          <div className={styles.buyHeadingAuthorWrapper}>

            <h2 className={styles.buyHeadingSerie}>  {serieSelected.seriesName}</h2>
            <ByAuthor authors={authorsStrArray} />
          </div>

        </div>

 
      <div key={seriesListState} className={`${styles.buyTextArrowDiv} fadeInAnim`} style={{ transform: seriesListState == "Open" ? "rotate(180deg)" : "rotate(0deg)", animationDuration: "0.8s" }}>
             {seriesListState == "Closed" && "CLICK TO EXPAND"}
        <PiArrowFatLineDownLight size="2rem" className={styles.buyOpenCloseArrow} /></div>


      </div>

      <ul className={styles.whereToBuyBooksList}>
        {seriesListState == "Open" && bookList.map((item, index, array) =>
          <li key={item._id + "whereToBuy"} className={`${styles.whereToBuyBookListItem}  fadeInFromBelowAnim`} style={{ animationDelay: `${(animInc * index) + (animationDelay ? animationDelay : 0)}}ms` }} onClick={() => handleLinkClick(item.buyLink)} >
            <div className={styles.buyListItemImageDiv}>
              <Image className={styles.buyImageBook} src={urlFor(item.imageBook, 200)} alt="Series Card Image" fill={true} sizes="(max-width: 200px) 100vw, 50vw" />
            </div>
            <div className={styles.buyListBookInfo}>

              <div className={styles.buyTitleBookNumberWrapper}>       <span className={styles.buyTitleBook}> {item.bookTitle} </span>
                <div className="">Book <span className={styles.buyListBookNumber}>{getBookNumberInString(item.bookInSeries)}</span> of the Series </div>
              </div>
              <BookAvailableIn availability={item.availability} classNameItem={styles.buyAvailabilityItem} shouldIsbnPopUpShow={false} />
            </div>
            {item.buyLink != undefined ? <GoLinkExternal className={styles.buyLinkArrow} size="1.9rem" /> : <PiGlobeSimpleXLight className={styles.noLinkArrow} size="2.1rem" />}
            <div className={styles.buyAvailableDiv}>
            </div>
          </li>

        )}


      </ul>

    </article>

  );
}
