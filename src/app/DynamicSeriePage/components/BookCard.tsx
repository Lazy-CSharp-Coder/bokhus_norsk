import type { BookCardProps } from "@/types/booktypes";
import { numberToWords } from "convert-number-to-words";
import Image from "next/image";
import { BookAvailableIn } from "../../../components/common/BookAvailableIn";
import { urlFor } from "@/functions/urlFor";
import { BookInSerieText } from "./BookInSerieText";
import "./BookCard.module.css";

export function BookCard({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName, buyLink }: BookCardProps)
{
    const imageSrc = urlFor(imageBook, 800);
    return (
        <div className={`bookCard`} style={{ animationDuration: "1.2s" }}>
            <div className="bookImage">
                <Image className="image" src={imageSrc} alt="book image" fill={true} sizes="(max-width: 800px) 100vw, 50vw" loading="eager"/>
            </div>
            <div className="bookFactsAndDescriptionWrapper grid">
                <div className="bookFactsDiv flex">

                    <div className="bookHeadingWrapper">
                        <h2 className="bookTitle">{bookTitle}</h2>
                        <BookInSerieText bookInSerie={bookInSeries} serieName={seriesName} />
                        <span className="headingAvailableSeparator">

                            <BookAvailableIn availability={availability} bookTitle={bookTitle} buyLink={buyLink} />
                        </span>

                    </div>


                    <p className="bookReleaseInfo">ORIGINALLY RELEASED IN <span className="releaseYear">{releaseYear}</span></p>
                    <p className="synopsisText">Book description / synopsis :</p>
                </div>
                <div className="descriptionSubWrapper flex">

                    {subTitle &&
                        <h4 className={`subTitle`}>{`${subTitle}`}</h4>
                    }


                    <ul className={`descriptionList flex`}>
                        {description.map((item, index) =>
                        (
                            <p key={`description-${_id}-${index}`} className={`descriptionText`}>{item}</p>

                        ))}
                    </ul>
                </div>
            </div>

        </div>


    );
}


export function BookCardSizer({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName }: BookCardProps)
{
    const numStr = numberToWords(bookInSeries);
    const withCapital = numStr.charAt(0).toUpperCase() + numStr.slice(1);
    const imageSrc = urlFor(imageBook, 1000);



    return (
        <div className={`bookDivForSizing`}>
            <div className="bookImage">
                <Image className="image" src={imageSrc} alt="book image" fill={true} />   </div>
            <div className="bookFactsAndDescriptionWrapper grid">
                <div className="bookFactsDiv flex">

                    <div className="bookHeadingWrapper">
                        <h3 className={`bookTitle`}>{bookTitle}</h3>
                        <BookInSerieText bookInSerie={bookInSeries} serieName={seriesName} />
                    </div>
                    <BookAvailableIn availability={availability} bookTitle={bookTitle} />
                    <p className="bookReleaseInfo">RELEASED ORIGINALLY IN <span className="releaseYear">{releaseYear}</span></p>
                    <p className="synopsisText">Book Description / Synopsis :</p>
                </div>

                <div className="descriptionSubWrapper flex">

                    {subTitle &&
                        <h4 className={`subTitle`}>{`${subTitle}`}</h4>
                    }


                    <ul className={`descriptionList flex`}>
                        {description.map((item, index) =>
                        (
                            <p key={`description-${_id}-${index}`} className={`descriptionText`}>{item}</p>

                        ))}
                    </ul>
                </div>
            </div>

        </div>


    );
}