"use client";
import { ByAuthor } from "./ByAuthor";
import { BestSellerList } from "./BestSellerList";
import { SeriesInfoProps } from "@/types/booktypes";
import { ExitTeaserInfo } from "./ExitTeaserInfo";
import { useIntroState } from "@/globalStates";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

export function SeriesInfoArticle({ seriesName, authors, bestSellerIntro, bestSellerList}: SeriesInfoProps)
{
    const { hasIntroBeenPlayed, isDescriptionShowing, setIsDescriptionShowing } = useIntroState();
    return (
        <article key={"01" + hasIntroBeenPlayed} className="seriesInfoArticle flex fadeInAnim" onClick={()=> setIsDescriptionShowing(true)}>

            <div className="headingAndAuthorInfoDiv grid">
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