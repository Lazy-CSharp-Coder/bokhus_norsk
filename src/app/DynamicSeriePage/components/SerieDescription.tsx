
import { ByAuthor } from "../../../components/common/ByAuthor";
import { SerieDescriptionProps } from "@/types/booktypes";
import { SerieRecommendedFor } from "./SerieRecommendeFor";
import Image from "next/image";
import styles from "./SerieDescription.module.css";

export function SerieDescription({ seriesName, authors, seriesFact, description, ageGroup, imageUrl,dialectNO }: SerieDescriptionProps)
{

    return (
        <div className={`${styles.descriptionSeriesDiv} flex borderFadeInAnim`}style={{ animationDelay: "0.5s", animationDuration: "2s" }}>
            
            <div className={styles.seriesIconHeadingWrapper}>
                <div className={`${styles.seriesImage} fadeInAnim`} style={{ animationDuration: "1.2s", animationDelay: "0.4s" }}>
                    <Image className="image" src={imageUrl} alt="series image" fill={true} sizes="(max-width: 350px) 100vw, 50vw" loading="eager" />
                </div>

                <div className={`${styles.serieNameFactDiv} fadeInAnim`} style={{ animationDelay: "0.9s", animationDuration: "1.5s" }}>
                    <h2 className={styles.seriesName}> {seriesName} </h2>
                    <ByAuthor key={authors + "#Description"} authors={authors} />
                 

                    <p className={styles.seriesDescriptionFact}>{seriesFact}</p>
                
                </div>

            </div>
            {/* <h4 className="descriptionSeriesHeading">{descriptionStr}</h4> */}
            <div className={`${styles.descriptionSeriesList} flex fadeInAnim`} style={{ animationDelay: "1.3s", animationDuration: "1.5s" }}>
                {description.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
       {/* <p className={styles.dialect}><span className={styles.utgaveText}>{dialectNO}</span> UTGAVE </p> */}
            </div>

            <SerieRecommendedFor ageGroup={ageGroup} />

        </div>);

}