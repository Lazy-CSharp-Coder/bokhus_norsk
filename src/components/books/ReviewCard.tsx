import type { ReviewProps } from "../../types/reviewtypes";
import Image from "next/image";
import Link from "next/link";

export function ReviewCard({ _id, format, bookReviewed, date, country, stars, reviewerName, titleReview, reviewDescription, linkReview, doAnimateStars, animationToUse}: ReviewProps)
{
       
    const animInc = 50;
    const waitForMain = 0;

    
    return (
        <div id={_id} className={`reviewCardLinkWrapper flex  ${animationToUse}`}>
            <div  className={`reviewCardDiv flex`}>
                <h3 className="titleReviewText">{titleReview}</h3>
                <div className="starsDiv flex">
                    {[...Array(stars)].map((item, index) =>
                        <Image key={index + "star"} style={{ animationDelay: `${(animInc * index) + waitForMain}ms` }} className={`starImg ${doAnimateStars ? "scaleInAnim" : ""}`} src="/icons/star2.png" alt="star icon" width={20} height={20}></Image>)
                    }
                </div>

                <p className="bookReviewed">{bookReviewed} <span className="onText">on</span> <span className="formatText">{format}</span></p>
 
                <div className="reviewerNameIconWrapper flex">

                    <div className="userIconDiv">
                        <Image src="/icons/userReview.png" alt="user icon review" width="25" height="25" />
                    </div>
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
            <Link className="linkToReview" href={linkReview} target="_blank">Click to see review <span className="arrowLink">&#8594;</span></Link>


        </div>);
}


// star attrib :<a href="https://www.flaticon.com/free-icons/star" title="star icons">Star icons created by Maxim Basinski Premium - Flaticon</a>

// user attrib : <a href="https://www.flaticon.com/free-icons/account" title="account icons">Account icons created by Shashank Singh - Flaticon</a>