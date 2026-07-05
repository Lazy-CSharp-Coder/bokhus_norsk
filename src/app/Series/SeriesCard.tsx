import { ByAuthor } from "@/components/books/ByAuthor";
import { urlFor } from "@/lib/urlFor";
import type { Series, Author } from "@/types/booktypes";
import Image from "next/image";
import { client } from "@/sanity/client";


export async function SeriesCard({serie, animationDelay} : SeriesCardProps)
{
    

    return(
        <div className="seriesCard">
            <div className="seriesCardImgWrap">
                <Image src={urlFor(imageSeries, 400)} alt="seire image" fill={true} />
            </div>
            <h3 className="seriesCardName">{seriesName} </h3>
            <ByAuthor authors={authorsStrArray}/>
            <p className="seriesFact">{seriesFact} </p>
            <p className="seriesTeaser"> {seriesTeaser} </p>

        </div>
    )
}