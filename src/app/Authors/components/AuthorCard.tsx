import type { AuthorCardProps } from "@/types/booktypes";
import Image from "next/image";
import { urlFor } from "@/functions/urlFor";
import "./AuthorCard.module.css";
import { SlArrowRight } from "react-icons/sl";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function AuthorCard({ _id, profileImage, name, subTitle, genre, description, animationDelay }: AuthorCardProps)
{
    const profileUrl = urlFor(profileImage, 800);
    const imageSrc = profileUrl.length == 0 ? "/images/placeholderAuthor.png" : profileUrl;

    const animDelay = animationDelay ? animationDelay : "0";
    return (
        <article className="authorCard flex fadeInFromBelowAnim" style={{ animationDelay: animDelay }}>
            <div className="authorImageDiv">
                <Image className="imageAuthor" src={imageSrc} alt="author image" fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px" />
            </div>
            <div className="authorNameAndDescriptionDiv flex">
                <div className="authorNameSubTitleWrapper flex">
                    <h4 className="authorName">{name} </h4>
                    <div className="authorFactsDiv flex">
                        <p className="authorCardSubtitle">{subTitle}<span> of </span><span className="authorGenreText">{genre}</span></p>

                    </div>
                </div>
                <ul className="authorDescriptionList flex">
                    {description.map((item, index) =>
                        <li key={_id + index}>{item}</li>

                    )}

                </ul>
                {/* <BestSellerList bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} /> */}
            </div>
            <span className="bigGoToArrowSpan">CLICK TO ACCESS<MdOutlineKeyboardDoubleArrowRight size="var(--arrowSize)" className="bigGotToArrow"/></span>


        </article>
    );
}