import { BackgroundImage } from "../common/BackgroundImage";
import { ByAuthor } from "../common/ByAuthor";
import { DescriptionSeriesProps } from "@/types/booktypes";
import { RecommendedFor } from "./RecommendeFor";
import Image from "next/image";

export function DescriptionSeries({ seriesName, authors, seriesFact, description, ageGroup, imageUrl }: DescriptionSeriesProps)
{
    return (
        <div className="descriptionSeriesDiv flex borderFadeInAnim" style={{ animationDelay: "0.5s", animationDuration: "2s" }}>
            <BackgroundImage className="descriptionBackground" src={imageUrl} animDelay="0s" />
            <div className="seriesIconHeadingWrapper flex">
                <div className="seriesImage fadeInAnim" style={{ animationDuration: "1.2s", animationDelay: "0.4s" }}>
                    <Image className="image" src={imageUrl} alt="series image" fill={true} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>


                <div className="fadeInAnim" style={{ animationDelay: "0.9s", animationDuration: "1.5s" }}>
                    <h2 className="seriesName"> {seriesName} </h2>
                    <ByAuthor key={authors + "#Description"} authors={authors} />
                    <p className="seriesFact">{seriesFact}</p>

                </div>



            </div>
            {/* <h4 className="descriptionSeriesHeading">{descriptionStr}</h4> */}
            <ul className={`descriptionSeriesList flex fadeInAnim`} style={{ animationDelay: "1.3s", animationDuration: "1.5s" }}>
                {description.map((item, index) => (
                    <li key={index} className={`descriptionSeries`}>{item}</li>
                ))}

            </ul>
            <RecommendedFor ageGroup={ageGroup} />

        </div>);

}