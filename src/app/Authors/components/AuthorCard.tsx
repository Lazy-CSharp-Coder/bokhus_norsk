import type { AuthorCardProps } from "@/types/booktypes";
import Image from "next/image";
import { urlFor } from "@/functions/urlFor";
import "./AuthorCard.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./AuthorCard.module.css";


export function AuthorCard({ _id, profileImage, name, subTitle, genre, description, animationDelay, shouldDisplayGuidance }: AuthorCardProps)
{
    const profileUrl = urlFor(profileImage, 800);
    const imageSrc = profileUrl.length == 0 ? "/images/placeholderAuthor.png" : profileUrl;
{`${styles.authorCard}`}
    const animDelay = animationDelay ? animationDelay : "0";
    return (
        <article className={`${styles.authorCard} flex fadeInFromBelowAnim`} style={{ animationDelay: animDelay }}>
            <div className={`${styles.authorImageDiv}`}>
                <Image className={`${styles.imageAuthor}`} src={imageSrc} alt={`author image ${name}`} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px" />
            </div>
            <div className={`${styles.authorNameAndDescriptionDiv} flex`}>
                <div className={`${styles.authorNameSubTitleWrapper} flex`}>
                    <h4 className={`${styles.authorName}`}>{name} </h4>
                    <div className={`${styles.authorFactsDiv} flex`}>
                        <p className={`${styles.authorCardSubtitle}`}>{subTitle}<span> of </span><span className={`${styles.authorGenreText}`}>{genre}</span></p>

                    </div>
                </div>
                <ul className={`${styles.authorDescriptionList} flex`}>
                    {description.map((item, index) =>
                        <li key={_id + index}>{item}</li>

                    )}

                </ul>
                {/* <BestSellerList bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} /> */}
            </div>{shouldDisplayGuidance &&
            <span className={`${styles.bigGoToArrowSpan}`}>KLIKK FOR Å LESE MER<MdOutlineKeyboardDoubleArrowRight size="var(--arrowSize)" className={`${styles.bigGotToArrow}`}/></span> }


        </article>
    );
}