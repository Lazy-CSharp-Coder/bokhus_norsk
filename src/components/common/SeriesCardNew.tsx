import { ByAuthor } from "@/components/books/ByAuthor";
import { urlFor } from "@/lib/urlFor";

import Image from "next/image";

import { SeriesBigCardProps } from "../../app/Series/SeriesPageTypes";


export async function SeriesCard({ authors, seriesName, seriesImageUrl, seriesFact, seriesTeaser, genre, animationDelay }: SeriesBigCardProps)
{


    return (
        <div className="seriesCard">
            <div className="seriesCardImgWrap">
                <Image src={seriesImageUrl} alt="seire image" fill={true} sizes="(max-width: 400px) 100vw, 50vw" />
            </div>
            <h3 className="seriesCardName">{seriesName} </h3>
            <ByAuthor authors={authors} />
            <p className="seriesFact">{seriesFact} </p>
            <p className="seriesTeaser"> {seriesTeaser} </p>

        </div>
    );
}