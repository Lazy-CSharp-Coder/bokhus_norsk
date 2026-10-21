"use client";
import { ByAuthor } from "../../../components/common/ByAuthor";
import { BestSellerList } from "./BestSellerList";
import { SeriesInfoProps } from "@/types/booktypes";
import { useDescriptionShowingState } from "@/globalStates";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import styles from "./SerieHeader.module.css";

export function SerieHeader({ seriesName, authors, bestSellerIntro, bestSellerList, shouldDisplayDescription }: SeriesInfoProps)
{

    const { isDescriptionShowing, setIsDescriptionShowing } = useDescriptionShowingState();

    const clickAllowed = shouldDisplayDescription ? shouldDisplayDescription : true;
    return (
        <article key={"01" + "Description"} className={`${styles.serieHeader} flex fadeInAnim`}>

            <div className={styles.headingAndAuthorInfoDiv} onClick={() => { clickAllowed == true &&  setIsDescriptionShowing(true)}}>
                <div className={`${styles.serieNameArrowWrapper} flex`}>                
                    <h1 className={styles.serieName}>{seriesName}</h1>
                    {!isDescriptionShowing && clickAllowed && <HiOutlineArrowSmallLeft className={`${styles.arrowToDescription} scaleInAnim`} />}
                </div>
                <div className={styles.authorNameBestsellerWrapper}>
                    <ByAuthor key={authors + "#SeriesInfo"} authors={authors} />
                    <span style={{ opacity: bestSellerIntro != "not found" ? "1" : "0" }}>

                        <BestSellerList bestSellerIntro={bestSellerIntro} bestSellerList={bestSellerList} />

                    </span>

                </div>
            </div>


        </article>

    );

}