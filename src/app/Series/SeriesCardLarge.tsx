"use client";

import { SeriesCardProps } from "@/types/booktypes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { ByAuthor } from "@/components/books/ByAuthor";



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
<span className="seriesCardLargeFact">{seriesFact}</span>
                </div>
             
                
                   <div className="seriesCardLargeTeaserArrowWrapper flex">
                    <span className="seriesCardLargeTeaser">{seriesSelected.seriesTeaser}</span>
                    <MdArrowForwardIos size={"1.6rem"} className="seriesCardLargeArrowIcon" />
                </div>


            </div>
        </div>
    );
}