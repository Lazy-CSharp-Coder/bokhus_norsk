import { SeriesHeadingProps } from "@/types/booktypes";
import styles from "./AuthorSeriesHeading.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";

export function AuthorSeriesHeading({authorName, animationDelay} : SeriesHeadingProps)
{
    return(
    <div className={`${styles.authorSeriesHeading} fadeInFromBelowAnim`} style={{animationDelay :`${animationDelay}ms`, animationDuration: "0.6s"}}>
         <h3 className={styles.authorSeriesHeading}>Series from <span className={styles.authorSeriesSectionText}>{authorName}</span> available from <BokHusCom/></h3>
             
    </div>);
}
   