import { EndTeaserInfoProps } from "@/types/booktypes";

export function ExitTeaserInfo({isShowing} : EndTeaserInfoProps)
{
    return(
        <>
       <div className="endTeaserDiv desktopModeBlock" style={{opacity: isShowing ? "0.8": "0"}}>Press <span className="escTeaserText">Esc</span> or click on <span className="escTeaserText">book</span> to end intro</div>
       <div className="endTeaserDiv mobileMode" style={{opacity: isShowing ? "0.8": "0"}}>Click on <span className="escTeaserText">book</span> to end intro</div>
      </>
        
    );
}