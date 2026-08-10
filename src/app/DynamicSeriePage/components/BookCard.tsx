import type { BookCardProps } from "@/types/booktypes";
import { numberToWords } from "convert-number-to-words";
import Image from "next/image";
import { BookAvailableIn } from "../../../components/common/BookAvailableIn";
import { urlFor } from "@/functions/urlFor";
import { BookInSerieText } from "./BookInSerieText";
import styles from "./BookCard.module.css";
import { useWindowWidth } from "@/components/hooks/useWindowWidth";

export function BookCard({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName, buyLink }: BookCardProps)
{
    const width = useWindowWidth();
    const tabletMode = width ? width < 1024 ? true : false : false;
    const imageSrc = urlFor(imageBook, 800);
    return (
        <div className={`${styles.bookCard} ${tabletMode ? "fadeInFromBelowAnim" : "fadeInFromLeftAnim"}`} style={{ animationDuration: "1.2s" }}>
            <div className={styles.bookImage}>
                <Image className="image" src={imageSrc} alt={`book image ${bookTitle}`} fill={true} sizes="(max-width: 800px) 100vw, 50vw" loading="eager"/>
            </div>
            <div className={styles.bookFactsAndDescriptionWrapper}>
                <div className={styles.bookFactsDiv}>

                    <div className={styles.bookHeadingWrapper}>
                        <h2 className={styles.bookTitle}>{bookTitle}</h2>
                        <BookInSerieText bookInSerie={bookInSeries} serieName={seriesName} />
                        <span className={styles.bookHeadingAvailableSeparator}>

                            <BookAvailableIn availability={availability} bookTitle={bookTitle} buyLink={buyLink} />
                        </span>

                    </div>

                    <p className={styles.bookReleaseInfo}>ORIGINALLY RELEASED IN <span className={styles.releaseYear}>{releaseYear}</span></p>
                    <p className= {styles.bookSynopsisText}>Book description / synopsis :</p>
                </div>
                <div className={styles.bookDescriptionSubWrapper}>

                    {subTitle &&
                        <h4 className={styles.bookSubTitle}>{`${subTitle}`}</h4>
                    }

                    <div className={styles.bookDescriptionList}>
                        {description.map((item, index) =>
                        (
                            <p key={`description-${_id}-${index}`}>{item}</p>

                        ))}
                    </div>
                </div>
            </div>

        </div>


    );
}


export function BookCardSizer({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName, buyLink }: BookCardProps)
{
    const numStr = numberToWords(bookInSeries);
    const withCapital = numStr.charAt(0).toUpperCase() + numStr.slice(1);
    const imageSrc = urlFor(imageBook, 1000);



    return (
        <div className={styles.bookDivForSizing}>
              <div className={styles.bookImage}>
                <Image className="image" src={imageSrc} alt="book image" fill={true} sizes="(max-width: 800px) 100vw, 50vw" loading="eager"/>
            </div>
            <div className={styles.bookFactsAndDescriptionWrapper}>
                <div className={styles.bookFactsDiv}>

                    <div className={styles.bookHeadingWrapper}>
                        <h2 className={styles.bookTitle}>{bookTitle}</h2>
                        <BookInSerieText bookInSerie={bookInSeries} serieName={seriesName} />
                        <span className={styles.bookHeadingAvailableSeparator}>

                            <BookAvailableIn availability={availability} bookTitle={bookTitle} buyLink={buyLink} />
                        </span>

                    </div>


                    <p className={styles.bookReleaseInfo}>ORIGINALLY RELEASED IN <span className={styles.bookReleaseYear}>{releaseYear}</span></p>
                    <p className={styles.bookSynopsisText}>Book description / synopsis :</p>
                </div>
                <div className={styles.bookDescriptionSubWrapper}>

                    {subTitle &&
                        <h4 className={styles.bookSubTitle}>{`${subTitle}`}</h4>
                    }


                    <div className={styles.bookDescriptionList}>
                        {description.map((item, index) =>
                        (
                            <p key={`description-${_id}-${index}`} >{item}</p>

                        ))}
                    </div>
                </div>
            </div>


        </div>


    );
}