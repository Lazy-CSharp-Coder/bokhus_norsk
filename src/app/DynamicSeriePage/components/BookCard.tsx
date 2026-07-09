import type { BookCardProps } from "@/types/booktypes";
import { numberToWords } from "convert-number-to-words";
import Image from "next/image";
import { BookAvailableIn } from "../../../components/common/BookAvailableIn";
import { urlFor } from "@/functions/urlFor";
import { BookInSerieText } from "./BookInSerieText";
import "./BookCard.module.css";

export function BookCard({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName, animationName, bookArticleText, saintyTagLanguage }: BookCardProps)
{
    const imageSrc = urlFor(imageBook, 800);
    return (
        <div className={`bookDiv ${animationName ? animationName : "fadeInFromLeftAnim"}`} style={{ animationDuration: "1.2s" }}>
            <div className="bookImage">
                <Image className="image" src={imageSrc} alt="book image" fill={true} sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="bookFactsAndDescriptionDiv grid">
                <div className="factsDiv flex">

                    <div className="headingWrapper">
                        <h3 className={`bookTitle`}>{bookTitle}</h3>
                        <BookInSerieText bookInSerie={bookInSeries} serieName={seriesName} />
                    </div>
                    { }
                    <BookAvailableIn availability={availability} />
                    <p className="releaseInfo">Originally released in <span className="releaseYear">{releaseYear}</span></p>
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


export function BookCardSizer({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName, bookArticleText }: BookCardProps)
{
    const numStr = numberToWords(bookInSeries);
    const withCapital = numStr.charAt(0).toUpperCase() + numStr.slice(1);
    const imageSrc = urlFor(imageBook, 1000);



    return (
        <div className={`bookDivForSizing`}>
            <div className="bookImage">
                <Image className="image" src={imageSrc} alt="book image" fill={true} />                </div>
            <div className="bookFactsAndDescriptionDiv grid">
                <div className="factsDiv flex">

                    <div className="headingWrapper">
                        <h3 className={`bookTitle`}>{bookTitle}</h3>
                        <p className="bookInfo">Book <span className="bookNumberText">{withCapital}</span> of the <span className="bookNumberText">{seriesName} </span> Series</p>
                    </div>
                    <BookAvailableIn availability={availability} />
                    <p className="releaseInfo">RELEASED ORIGINALLY IN <span className="releaseYear">{releaseYear}</span></p>
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