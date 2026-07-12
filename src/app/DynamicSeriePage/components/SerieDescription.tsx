
import { ByAuthor } from "../../../components/common/ByAuthor";
import { SerieDescriptionProps } from "@/types/booktypes";
import { SerieRecommendedFor } from "./SerieRecommendeFor";
import Image from "next/image";
import "./SerieDescription.module.css";

export function SerieDescription({ seriesName, authors, seriesFact, description, ageGroup, imageUrl }: SerieDescriptionProps)
{
    return (
        <div className="descriptionSeriesDiv flex borderFadeInAnim" style={{ animationDelay: "0.5s", animationDuration: "2s" }}>
            {/* <BackgroundImage className="descriptionBackground" src={imageUrl} animDelay="0s" /> */}
            <div className="seriesIconHeadingWrapper flex">
                <div className="seriesImage fadeInAnim" style={{ animationDuration: "1.2s", animationDelay: "0.4s" }}>
                    <Image className="image" src={imageUrl} alt="series image" fill={true} sizes="(max-width: 350px) 100vw, 50vw" />
                </div>


                <div className="serieNameFactDiv fadeInAnim" style={{ animationDelay: "0.9s", animationDuration: "1.5s" }}>
                    <h2 className="seriesName"> {seriesName} </h2>
                    <ByAuthor key={authors + "#Description"} authors={authors} />
                    <p className="seriesDescriptionFact">{seriesFact}</p>

                </div>



            </div>
            {/* <h4 className="descriptionSeriesHeading">{descriptionStr}</h4> */}
            <ul className={`descriptionSeriesList flex fadeInAnim`} style={{ animationDelay: "1.3s", animationDuration: "1.5s" }}>
                {description.map((item, index) => (
                    <li key={index} className={`descriptionSeries`}>{item}</li>
                ))}

            </ul>

            <SerieRecommendedFor ageGroup={ageGroup} />




        </div>);

}