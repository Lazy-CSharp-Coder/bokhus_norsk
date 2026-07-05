import { urlFor } from "@/lib/urlFor";
import { Series } from "@/types/booktypes";
import Image from "next/image";

interface SeriesCardProps {
    serie : Series,
    animationDelay? : string
}


export function SeriesCard({serie, animationDelay} : SeriesCardProps)
{
    return(
        <div className="seriesCard">
            <div className="seriesCardImgWrap">
                <Image src={urlFor(serie.imageSeries, 400)} alt="seire image" fill={true} />
            </div>
            <p className=""

        </div>
    )
}