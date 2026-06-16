"use client";
import { useIntroState } from "@/globalStates"

export function ReviewScrollButton() 
{
    const intro = useIntroState();
    const handleScrollToReviews = () => 
    {
        const section = document.getElementById("reviewArticle");
        if(section) section.scrollIntoView({ behavior : "smooth", block: "center"})

    }
        
    return(
        
         <button onClick={handleScrollToReviews} className={`reviewClicker fadeInAnim desktopModeBlock` } ><span className="clickHereSeries"> CLICK</span> OR 
                             <span className="scrollSeries"> SCROLL</span> TO READ REVIEWS</button>
    )
}