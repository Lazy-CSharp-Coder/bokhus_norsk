"use client";
import styles from "./ReviewScrollButton.module.css";
export function ReviewScrollButton() 
{

    const handleScrollToReviews = () => 
    {
        const section = document.getElementById("reviewArticle");
        if(section) section.scrollIntoView({ behavior : "smooth", block: "center"})

    }
        
    const { reviewClicker, clickHereSeries, scrollSeries} = styles;
    
    return(
        
         <button onClick={handleScrollToReviews} className={`${reviewClicker} fadeInAnim desktopModeBlock` } ><span className={clickHereSeries}> KLIKK</span> ELLER 
                             <span className={scrollSeries}> SCROLL</span> FOR Å LESE ANMELDELSER</button>
    )
}