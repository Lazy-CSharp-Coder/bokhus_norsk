import { SingleBookCardProps } from "@/types/booktypes";
import { urlFor } from "@/functions/urlFor";
import Image from "next/image";
import { BookAvailableIn } from "@/components/common/BookAvailableIn";
import { ByAuthor } from "@/components/common/ByAuthor";

export function SingleBookCard({ _id, imageBook, bookTitle, authorNames, availability, releaseYear, subTitle, description }: SingleBookCardProps)
{
    const imageSrc = urlFor(imageBook, 800);
    return (
        <div className={`singleBookCard ${"fadeInAnim"}`} style={{ animationDuration: "1.2s" }}>
            <div className="singleBookCardImage">
                <Image className="image" src={imageSrc} alt="book image" fill={true} sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div className="singelBookCardInfoDiv">
                <div className="singeBookCardFactDiv flex">

                    <div className="singleBookCardHeadingWrapper">
                        <h3 className="singelBookCardBookTitle">{bookTitle}</h3>
                        <ByAuthor authors={authorNames} />
                        <span className="singleBookCardAvailabilitySpan">

                            <BookAvailableIn availability={availability} />
                        </span>

                    </div>


                    <p className="singleBookCardReleaseText">ORIGINALLY RELEASED IN <span className="sbkReleaseYear">{releaseYear}</span></p>
                    <p className="singleBookCardSynopsisText">Book description / synopsis :</p>
                </div>
                <div className="singleBookCardSubDescriptionWrapper flex">

                    {subTitle &&
                        <h4 className="singleBookCardSubTitle">{`${subTitle}`}</h4>
                    }


                    <ul className={`singleBookCardDescriptionList flex`}>
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

