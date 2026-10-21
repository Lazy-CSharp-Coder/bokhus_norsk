import type { BookCardProps } from "@/types/booktypes";
import { numberToWords } from "convert-number-to-words";
import Image from "next/image";
import { BookAvailableIn } from "../../../components/common/BookAvailableIn";
import { urlFor } from "@/functions/urlFor";
import { BookInSerieText  } from "@/app/DynamicSeriePage/components/BookInSerieText";
import styles from "./SingleBookCard.module.css";
import { useWindowWidth } from "@/components/hooks/useWindowWidth";

export function SingleBookCard({ _id, imageBook, availability, bookInSeries, releaseYear, bookTitle, subTitle, description, seriesName, buyLink }: BookCardProps)
{

    const availabilityArray = !!availability ? availability : [{ bookType: "not available yet", isbn: "no isbn available yet" }];
    const width = useWindowWidth();
    const tabletMode = width ? width < 1024 ? true : false : false;
    const imageSrc = urlFor(imageBook, 800);
    return (
        <div className={`${styles.bookCard} fadeInFromBelowAnim`} style={{ animationDuration: "1.2s" }}>
            <div className={styles.bookImage}>
                <Image className="image" src={imageSrc} alt={`book image ${bookTitle}`} fill={true} sizes="(max-width: 800px) 100vw, 50vw" loading="eager" />
            </div>
            <div className={styles.bookFactsAndDescriptionWrapper}>
                <div className={styles.bookFactsDiv}>

                    <div className={styles.bookHeadingWrapper}>
                        <h2 className={styles.bookTitle}>{bookTitle}</h2>
                        <BookInSerieText bookInSerie={bookInSeries} serieName={seriesName} />
                        <span className={styles.bookHeadingAvailableSeparator}>

                            <BookAvailableIn availability={availabilityArray} bookTitle={bookTitle} buyLink={buyLink} />
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
                            <p key={`description-${_id}-${index}`}>{item}</p>

                        ))}
                    </div>
                </div>
            </div>

        </div>


    );
}
