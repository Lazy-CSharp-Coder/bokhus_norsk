"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/functions/urlFor";
import "./WhereToBuySerie.module.css";
import { ByAuthor } from "@/components/common/ByAuthor";
import { ImBooks } from "react-icons/im";
import { numberToWords } from "convert-number-to-words";
import { BookAvailableIn } from "@/components/common/BookAvailableIn";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { WhereToBuySeriesProps } from "./WhereToBuyTypes";
import { PiGlobeSimpleXLight } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import "./WhereToBuySerie.module.css";

type SerieListState = "Open" | "Closed";

export function WhereToBuySerie({ serieSelected, authorsStrArray, bookList, animationDelay }: WhereToBuySeriesProps)
{
  const [seriesListState, setSeriesListState] = useState<SerieListState>("Closed");

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
    <article className="whereToBuySerieArticle fadeInFromBelowAnim" style={{ animationDelay: animationDelay ? animationDelay : "" }} >
      <div className="whereToBuySerieHeadingDiv" ref={listHeaderRef}  onClick={handleHeaderClick}>
        <div className="whereToBuyIconInfoWrapper">
          <ImBooks size="4.4rem" className="buyBooksIcon" />
          <div className="buyHeadingAuthorWrapper">

            <h4 className="buyHeadingSerie">  {serieSelected.seriesName}</h4>
            <ByAuthor authors={authorsStrArray} />
          </div>

        </div>

        <span key={seriesListState} className="buyOpenCloseArrowSpan fadeInAnim" style={{ transform: seriesListState == "Open" ? "rotate(180deg)" : "rotate(0deg)", animationDuration: "0.8s" }}>
          <FaArrowDownWideShort size="2rem" className="buyOpenCloseArrow" />

        </span>

      </div>

      <ul className="whereToBuyBooksList">
        {seriesListState == "Open" && bookList.map((item, index) =>
          <li key={item._id + "whereToBuy"} className="whereToBuyBookListItem fadeInFromBelowAnim" style={{ animationDelay: `${animInc * index}ms` }} onClick={() => handleLinkClick(item.buyLink)} >
            <div className="buyListItemImageDiv">
              <Image className="buyImageBook" src={urlFor(item.imageBook, 200)} alt="Series Card Image" fill={true} sizes="(max-width: 200px) 100vw, 50vw" />
            </div>
            <div className="buyListBookInfo">

              <div className="buyTitleBookNumberWrapper">       <span className="buyTitleBook"> {item.bookTitle} </span>
                <div className="">Book <span className="buyListBookNumber">{getBookNumberInString(item.bookInSeries)}</span> of the Series </div>
              </div>
              <BookAvailableIn availability={item.availability} classNameItem="buyAvailabilityItem" />
            </div>
            {item.buyLink != undefined ? <GoLinkExternal className="buyLinkArrow" size="1.9rem" /> : <PiGlobeSimpleXLight className="noLinkArrow" size="2.1rem" />}
            <div className="buyAvailableDiv">
            </div>
          </li>

        )}


      </ul>

    </article>

  );
}
