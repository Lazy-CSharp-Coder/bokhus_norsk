"use client";

import { SeriesCardProps } from "@/types/booktypes";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { ByAuthor } from "@/components/books/ByAuthor";



export function SeriesCard({ seriesSelected, authors, imageUrl, routeToGo, animationDelay }: SeriesCardProps)
{
    const router = useRouter();
    const imageSrc = imageUrl.length == 0 ? "/images/placeholderSeriesCard.png" : imageUrl;
    const { seriesName, seriesFact } = seriesSelected;
    return (
        <div className="seriesCard flex fadeInFromBelowAnim" onClick={() => router.push(routeToGo)} style={{ animationDelay: `${animationDelay}ms` }}>
               <div className="seriesCardImageDiv">
                <Image className="seriesCardImage" src={imageSrc} alt="Series Card Image" fill={true} sizes="(max-width: 400px) 100vw, 50vw" />
            </div>

            <div className="linkTextWrapper flex">
                <div className="seriesInfoWrapper flex">  
                  <div className="seriesHeadingAuthorWrapper flex">
                      <h3 className="seriesHeading">{seriesName}</h3>
                    <ByAuthor authors={authors}/>
                  </div>
                <span className="smallCardSeriesFact">{seriesFact}</span>
                </div>
                        
                    <MdArrowForwardIos  size={"1.6rem"} />
   
            </div>
        </div>
    );
}