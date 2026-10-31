import { SeriesCardProps } from "@/types/booktypes";
import Link from "next/link";
import Image from "next/image";
import { ByAuthor } from "@/components/common/ByAuthor";

import { GiBookCover } from "react-icons/gi";
import styles from "./SeriesCardLarge.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function SeriesCardLarge({ seriesSelected, authors, imageUrl, routeToGo, booksAvailable, animationDelay }: SeriesCardProps)
{

    const imageSrc = imageUrl.length == 0 ? "/images/placeholderSeriesCard.png" : imageUrl;
    const { seriesName, seriesFact, dialektNO } = seriesSelected;

       const useDialect = seriesSelected.dialektNO  ? seriesSelected.dialektNO == "bokmaal" ? "BOKMÅL" : "NYNORSK" : "";
    return (
        booksAvailable ?
            <Link className={`${styles.seriesCardLarge} flex fadeInFromBelowAnim`} href={routeToGo ?? "/"} style={{ animationDelay: `${animationDelay}ms` }}>
                <div className={styles.seriesCardLargeImageDiv}>
                    <Image className={styles.seriesCardLargeImage} src={imageSrc} alt={`series card image ${seriesSelected.seriesName}`} fill={true} sizes="(max-width: 400px) 100vw, 50vw" />
                </div>

                <div className={styles.seriesCardLargeInfoWrapper}>
                    <div className={styles.seriesCardLargeHeadingAuthorWrapper}>
                        <h3 className={styles.seriesCardLargeHeading}>{seriesName}</h3>
                   <div className={styles.authorDialectWrapper}>
                           <ByAuthor authors={authors} />
                              <p className={styles.dialect}>{useDialect} <span className={styles.utgaveText}>UTGAVE</span></p>
                     </div>
                        <div className={styles.seriesCardLargeIconFactWrapper}>
                            <GiBookCover size="var(--seriesCardLargeBookIconSize)" className={styles.seriesCardLargeBookIcon} />
                            <span className={styles.seriesCardLargeFact}>{seriesFact}</span>
                        </div>

                    </div>

                    <div className={styles.seriesCardLargeTeaserBlurbWrapper}>

                        <span className={styles.seriesCardLargeTeaser}>{seriesSelected.seriesTeaser}</span>
                        <span className={styles.seriesCardLargeBlurb}>{seriesSelected.seriesBlurb}</span>

                    </div>


                    {/* <MdOutlineArrowForwardIos size={"7rem"} className="seriesCardLargeArrowIcon" /> */}
                </div>
                <span className={styles.bigGoToArrowSpanSerie}>LES MER<MdOutlineKeyboardDoubleArrowRight size="var(--arrowSizeSerie)" className={styles.bigGotToArrowSerie} /></span>

            </Link> :

            <div className={`${styles.seriesCardLarge} flex fadeInFromBelowAnim`} style={{ animationDelay: `$  {animationDelay}ms` }}>
                <div className={styles.seriesCardLargeImageDiv}>
                    <Image className={styles.seriesCardLargeImage} src={imageSrc} alt={`series card image ${seriesSelected.seriesName}`} fill={true} sizes="(max-width: 400px) 100vw, 50vw" />
                </div>

                <div className={styles.seriesCardLargeInfoWrapper}>
                    <div className={styles.seriesCardLargeHeadingAuthorWrapper}>
                        <h3 className={styles.seriesCardLargeHeading}>{seriesName}</h3>
                    
                     <div className={styles.authorDialectWrapper}>
                           <ByAuthor authors={authors} />
                              <p className={styles.dialect}>{useDialect} <span className={styles.utgaveText}>UTGAVE</span></p>
                     </div>
                        <div className={styles.seriesCardLargeIconFactWrapper}>
                            <GiBookCover size="var(--seriesCardLargeBookIconSize)" className={styles.seriesCardLargeBookIcon} />
                            <span className={styles.seriesCardLargeFact}>{seriesFact}</span>
                        </div>

                    </div>

                    <div className={styles.seriesCardLargeTeaserBlurbWrapper}>

                        <span className={styles.seriesCardLargeTeaser}>{seriesSelected.seriesTeaser}</span>
                        <span className={styles.seriesCardLargeBlurb}>{seriesSelected.seriesBlurb}</span>

                    </div>


                    {/* <MdOutlineArrowForwardIos size={"7rem"} className="seriesCardLargeArrowIcon" /> */}
                </div>
                <span className={styles.bigGoToArrowSpanSerie}>INGEN BØKER TILGJENGELIG<MdOutlineKeyboardDoubleArrowRight size="var(--arrowSizeSerie)" className={styles.bigGotToArrowSerie} /></span>

            </div>
    );
}