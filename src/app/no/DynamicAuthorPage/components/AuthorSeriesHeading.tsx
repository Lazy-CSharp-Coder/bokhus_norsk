import { SeriesHeadingProps } from "@/types/booktypes";
import styles from "./AuthorSeriesHeading.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";

export function AuthorSeriesHeading({authorName, animationDelay} : SeriesHeadingProps)
{
    return(
    <div className={`${styles.authorSeriesHeadingDiv} fadeInFromBelowAnim`} style={{animationDelay :`${animationDelay}ms`, animationDuration: "0.6s"}}>
         <h3 className={styles.authorSeriesHeading}>Serier skrevet av <span className={styles.authorSeriesSectionText}>{authorName}</span> tilgjengelig på <BokHusCom/></h3>
             
    </div>);
}
   