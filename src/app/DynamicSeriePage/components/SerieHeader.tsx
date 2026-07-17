"use client";
import { ByAuthor } from "../../../components/common/ByAuthor";
import { BestSellerList } from "./BestSellerList";
import { SeriesInfoProps } from "@/types/booktypes";
import { useDescriptionShowingState } from "@/globalStates";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import "./SerieHeader.module.css";

export function SerieHeader({ seriesName, authors, bestSellerIntro, bestSellerList }: SeriesInfoProps)
{


    const { isDescriptionShowing, setIsDescriptionShowing } = useDescriptionShowingState();
    return (
        <article key={"01" + "Description"} className="serieHeader flex fadeInAnim">

            <div className="headingAndAuthorInfoDiv" onClick={() => setIsDescriptionShowing(true)}>
                <div className="serieNameArrowWrapper flex">                <h2 className="serieName">{seriesName}</h2>
                    {!isDescriptionShowing && <HiOutlineArrowSmallLeft className="arrowToDescription scaleInAnim" />}
                </div>
                <div className="authorNameBestsellerWrapper flex">
                    <ByAuthor key={authors + "#SeriesInfo"} authors={authors} />
                    <span style={{ opacity: bestSellerIntro != "not found" ? "1" : "0" }}>

                        <BestSellerList bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} />

                    </span>

                </div>
            </div>


        </article>

    );

}