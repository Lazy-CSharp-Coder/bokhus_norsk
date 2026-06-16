import { SeriesHeadingProps } from "@/types/booktypes";

export function SeriesHeading({authorName, animationDelay} : SeriesHeadingProps)
{
    return(
    <div className="seriesHeadingDiv fadeInFromBelowAnim" style={{animationDelay :`${animationDelay}ms`, animationDuration: "0.6s"}}>
         <h3 className="seriesHeading">Series from <span className="authorSeriesSectionText">{authorName}</span> available from <span className="bookHouseText">BokHus.com</span></h3>
             
    </div>);
}
   