"use client";
import { ByAuthor } from "./ByAuthor";
import { BestSellerList } from "./BestSellerList";
import { SeriesInfoProps } from "@/types/booktypes";
import { ExitTeaserInfo } from "./ExitTeaserInfo";
import { useIntroState } from "@/globalStates";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { is } from "zod/locales";

export function SeriesInfoArticle({ seriesName, authors, bestSellerIntro, bestSellerList}: SeriesInfoProps)
{
    const { isDescriptionShowing, setIsDescriptionShowing } = useIntroState();
    return (
        <article key={"01" + "Description" + isDescriptionShowing} className="seriesInfoArticle flex fadeInAnim">

            <div className="headingAndAuthorInfoDiv grid"  onClick={()=> setIsDescriptionShowing(true)}>
                <div className="seriesNameArrowWrapper flex">                <h2 className="seriesName">{seriesName}</h2>
                 { !isDescriptionShowing && <HiOutlineArrowSmallLeft className="arrowToDescription scaleInAnim" /> }
                </div>
                <div className="authorNameBestsellerWrapper flex">
                    <ByAuthor key={authors + "#SeriesInfo"} authors={authors} />
                <BestSellerList bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} />
                </div>
            </div>


        </article>

    );

}