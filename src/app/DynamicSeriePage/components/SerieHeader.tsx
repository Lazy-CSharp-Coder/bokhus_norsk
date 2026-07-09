"use client";
import { ByAuthor } from "../../../components/common/ByAuthor";
import { BestSellerList } from "../../../components/common/BestSellerList";
import { SeriesInfoProps } from "@/types/booktypes";
import { useIntroState } from "@/globalStates";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import "./SerieHeader.module.css";

export function SerieHeader({ seriesName, authors, bestSellerIntro, bestSellerList }: SeriesInfoProps)
{
    const { isDescriptionShowing, setIsDescriptionShowing } = useIntroState();
    return (
        <article key={"01" + "Description" + isDescriptionShowing} className="serieHeader flex fadeInAnim">

            <div className="headingAndAuthorInfoDiv grid" onClick={() => setIsDescriptionShowing(true)}>
                <div className="serieNameArrowWrapper flex">                <h2 className="serieName">{seriesName}</h2>
                    {!isDescriptionShowing && <HiOutlineArrowSmallLeft className="arrowToDescription scaleInAnim" />}
                </div>
                <div className="authorNameBestsellerWrapper flex">
                    <ByAuthor key={authors + "#SeriesInfo"} authors={authors} />
                    <BestSellerList fontSize="1.05rem" bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} />
                </div>
            </div>


        </article>

    );

}