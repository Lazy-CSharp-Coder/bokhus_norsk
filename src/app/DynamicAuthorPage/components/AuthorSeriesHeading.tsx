import { SeriesHeadingProps } from "@/types/booktypes";
import "./AuthorSeriesHeading.module.css";
import { BokHusCom } from "@/components/common/BokHusCom";

export function AuthorSeriesHeading({authorName, animationDelay} : SeriesHeadingProps)
{
    return(
    <div className="authorSeriesHeadingDiv fadeInFromBelowAnim" style={{animationDelay :`${animationDelay}ms`, animationDuration: "0.6s"}}>
         <h3 className="authorSeriesHeading">Series from <span className="authorSeriesSectionText">{authorName}</span> available from <BokHusCom/></h3>
             
    </div>);
}
   