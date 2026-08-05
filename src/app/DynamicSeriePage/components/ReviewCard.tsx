import type { ReviewProps } from "../../../types/reviewtypes";
import Link from "next/link";
import "./ReviewCard.module.css";
import { IoStarSharp } from "react-icons/io5";
import { LuUserPen } from "react-icons/lu";
import { GoLinkExternal } from "react-icons/go";

export function ReviewCard({ _id, format, bookReviewed, date, country, stars, reviewerName, titleReview, reviewDescription, linkReview, reviewedOn, animationToUse }: ReviewProps)
{

      return (
        <div id={_id} className={`reviewCardLinkWrapper flex  ${animationToUse}`}>
            <div className={`reviewCardDiv flex`}>
                <h2 className="titleReviewText">{titleReview.toUpperCase()}</h2>
                <div className="starsDiv flex">
                    {[...Array(stars)].map((_, index) =>
                        <IoStarSharp key={"StarIconReview" + index} className="starIcon" size="1.5rem" />)

                    }
                </div>

                <p className="bookReviewed">{bookReviewed} <span className="onText">on</span> <span className="formatText">{format}</span></p>

                <div className="reviewerNameIconWrapper flex">


                    <LuUserPen size="1.6rem" className="userIcon" />

                    <p className="reviewerNameText">{reviewerName}</p>

                </div>
                <p className="reviewedInText">Reviewed in <span className="reviewCountry">{country}</span> on {date}</p>

                <ul className="reviewList flex">
                    {
                        reviewDescription != undefined &&
                        reviewDescription.map((item, index) => <li key={index} className="reviewDescription">{item} </li>)
                    }
                </ul>


            </div>
            <Link className="linkToReview" href={linkReview} target="_blank"><span>Click to see review on <span className="reviewSiteText">{reviewedOn} </span> </span><GoLinkExternal size="1.2rem"/></Link>


        </div>);
}


