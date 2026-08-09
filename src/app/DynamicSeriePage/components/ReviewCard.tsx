import type { ReviewProps } from "../../../types/reviewtypes";
import Link from "next/link";
import styles from "./ReviewCard.module.css";
import { IoStarSharp } from "react-icons/io5";
import { LuUserPen } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";

export function ReviewCard({ _id, format, bookReviewed, date, country, stars, reviewerName, titleReview, reviewDescription, linkReview, reviewedOn, animationToUse }: ReviewProps)
{

    return (
        <div id={_id} className={`${styles.reviewCardLinkWrapper} flex  ${animationToUse}`}>
            <div className={`${styles.reviewCardDiv}`}>
                <h2 className={styles.titleReviewText}>{titleReview.toUpperCase()}</h2>
                <div className={`${styles.starsDiv} flex`}>
                    {[...Array(stars)].map((_, index) =>
                        <IoStarSharp key={"StarIconReview" + index} className={styles.starIcon} size="1.5rem" />)

                    }
                </div>

                <p className={styles.bookReviewed}>{bookReviewed} <span className={styles.onText}>on</span> <span className={styles.formatText}>{format}</span></p>

                <div className={styles.reviewerNameIconWrapper}>


                    <LuUserPen size="1.6rem" className={styles.userIcon} />

                    <p className={styles.reviewerNameText}>{reviewerName}</p>

                </div>
                <p className={styles.reviewedInText}>Reviewed in <span className={styles.reviewCountry}>{country}</span> on {date}</p>

                <ul className={styles.reviewlist}>
                    {
                        reviewDescription != undefined &&
                        reviewDescription.map((item, index) => <li key={index} className={styles.reviewDescription}>{item} </li>)
                    }
                </ul>


            </div>
            <Link className={styles.linkToReview} href={linkReview} target="_blank"><span>Click to see review on <span className={styles.reviewSiteText}>{reviewedOn} </span> </span><GoLinkExternal size="1.2rem" /></Link>


        </div>);
}


