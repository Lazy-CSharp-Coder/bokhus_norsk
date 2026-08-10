import { SeriesCardProps } from "@/types/booktypes";
import Link from "next/link";
import Image from "next/image";
import { ByAuthor } from "@/components/common/ByAuthor";

import { GiBookCover } from "react-icons/gi";
import "./SeriesCardLarge.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export function SeriesCardLarge({ seriesSelected, authors, imageUrl, routeToGo, fallbackRouteNoBooks, booksAvailable,  animationDelay }: SeriesCardProps)
{

    const imageSrc = imageUrl.length == 0 ? "/images/placeholderSeriesCard.png" : imageUrl;
    const { seriesName, seriesFact } = seriesSelected;
    return (
        <Link className="seriesCardLarge flex fadeInFromBelowAnim" href={booksAvailable ? routeToGo: fallbackRouteNoBooks ?? "/"} style={{ animationDelay: `${animationDelay}ms` }}>
            <div className="seriesCardLargeImageDiv">
                <Image className="seriesCardLargeImage" src={imageSrc} alt={`series card image ${seriesSelected.seriesName}`} fill={true} sizes="(max-width: 400px) 100vw, 50vw" />
            </div>

            <div className="seriesCardLargeInfoWrapper flex">
                <div className="seriesCardLargeHeadingAuthorWrapper flex">
                    <h3 className="seriesCardLargeHeading">{seriesName}</h3>
                    <ByAuthor authors={authors} />
                    <div className="seriesCardLargeIconFactWrapper flex">
                        <GiBookCover size="var(--seriesCardLargeBookIconSize)" className="seriesCardLargeBookIcon" />
                        <span className="seriesCardLargeFact">{seriesFact}</span>
                    </div>

                </div>

                <div className="seriesCardLargeTeaserBlurbWrapper flex">

                    <span className="seriesCardLargeTeaser">{seriesSelected.seriesTeaser}</span>
                    <span className="seriesCardLargeBlurb">{seriesSelected.seriesBlurb}</span>

                </div>


                {/* <MdOutlineArrowForwardIos size={"7rem"} className="seriesCardLargeArrowIcon" /> */}
            </div>
               <span className="bigGoToArrowSpanSerie">{booksAvailable ? "CLICK FOR MORE" : "NO BOOKS AVAILABLE"}<MdOutlineKeyboardDoubleArrowRight size="var(--arrowSizeSerie)" className="bigGotToArrowSerie"/></span>

        </Link>
    );
}