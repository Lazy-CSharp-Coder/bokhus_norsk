import { SingleBookCardProps } from "@/types/booktypes";
import { urlFor } from "@/functions/urlFor";
import Image from "next/image";
import { BookAvailableIn } from "@/components/common/BookAvailableIn";
import { ByAuthor } from "@/components/common/ByAuthor";
import styles from "./SingleBookCard.module.css";


export function SingleBookCard({ _id, imageBook, bookTitle, authorNames, availability, releaseYear, subTitle, description }: SingleBookCardProps)
{
    console.log(authorNames);
    const imageSrc = urlFor(imageBook, 800);
    return (
        <div className={`${styles.singleBookCard} fadeInFromBelowAnim`} style={{ animationDuration: "1.2s", animationDelay: "0.8s" }}>
            <div className={styles.singleBookCardImage} >
                <Image className="image" src={imageSrc} alt={`book image ${bookTitle}`} fill={true} sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className={styles.singleBookCardInfoDiv}>
                <div className={styles.singleBookCardFactDiv}>

                    <div className={styles.singleBookCardHeadingWrapper}>
                        <h3 className={styles.singleBookCardBookTitle}>{bookTitle}</h3>
                        <ByAuthor authors={authorNames} />
                        <span className={styles.singleBookCardAvailabilitySpan}>

                            <BookAvailableIn availability={availability} fontSize="1rem"/>
                        </span>

                    </div>


                    <p className={styles.singleBookCardReleaseText}>ORIGINALLY RELEASED IN <span className={styles.sbkReleaseYear}>{releaseYear}</span></p>
                    <p className={styles.singleBookCardSynopsisText}>Book description / synopsis :</p>
                </div>
                <div className={styles.singleBookCardSubDescriptionWrapper}>

                    {subTitle &&
                        <h4 className={styles.singleBookCardSubTitle}>{`${subTitle}`}</h4>
                    }


                    <ul className={styles.singleBookCardDescriptionList}>
                        {description.map((item, index) =>
                        (
                            <p key={`description#single-${_id}-${index}`}>{item}</p>

                        ))}
                    </ul>
                </div>
            </div>

        </div>


    );
}

