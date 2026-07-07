"use client";

import { SeriesCardProps } from "@/types/booktypes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ByAuthor } from "@/components/books/ByAuthor";

import { GiBookCover } from "react-icons/gi";
import "./SeriesCardLarge.css";

import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface Category 
{
    name: string,
    icon: Icon;
}

export function SeriesCardLarge({ seriesSelected, authors, imageUrl, routeToGo, animationDelay }: SeriesCardProps)
{
    const router = useRouter();
    const imageSrc = imageUrl.length == 0 ? "/images/placeholderSeriesCard.png" : imageUrl;
    const { seriesName, seriesFact } = seriesSelected;
    return (
        <div className="seriesCardLarge flex fadeInFromBelowAnim" onClick={() => router.push(routeToGo)} style={{ animationDelay: `${animationDelay}ms` }}>
            <div className="seriesCardLargeImageDiv">
                <Image className="seriesCardLargeImage" src={imageSrc} alt="Series Card Image" fill={true} sizes="(max-width: 400px) 100vw, 50vw" />
            </div>

            <div className="seriesCardLargeInfoWrapper flex">
                <div className="seriesCardLargeHeadingAuthorWrapper flex">
                    <h3 className="seriesCardLargeHeading">{seriesName}</h3>
                    <ByAuthor authors={authors} />
                    <div className="seriesCardLargeIconFactWrapper flex">
                        <GiBookCover size="1.7rem" className="seriesCardLargeBookIcon" />
                        <span className="seriesCardLargeFact">{seriesFact}</span>
                    </div>

                </div>

                <div className="seriesCardLargeTeaserBlurbWrapper flex">

                    <span className="seriesCardLargeTeaser">{seriesSelected.seriesTeaser}</span>
                    <span className="seriesCardLargeBlurb">{seriesSelected.seriesBlurb}</span>

                </div>


                {/* <MdOutlineArrowForwardIos size={"7rem"} className="seriesCardLargeArrowIcon" /> */}
            </div>
        </div>
    );
}