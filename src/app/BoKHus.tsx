import { HeroPageText } from "@/types/languagetypes";

export function BokHus({heroPage } : {heroPage : HeroPageText})
{
    const { quotesHeading} = heroPage;
    return (
        <div className="headingQuoteDiv flex">
            <h1 className="heroHeading">Bok<span className="heroHeadingSpan">Hus</span></h1>
            <div className="quotesDiv flex">
                <h3 className="quoteText fadeInAnimQuotesx">{quotesHeading[0].start}<span className="rootsText fadeInAnimx">{quotesHeading[0].end}</span></h3>
                <h3 className="quoteText2 fadeInAnimQuotesx">{quotesHeading[1].start} <span className="futureText fadeInAnimx">{quotesHeading[1].end}</span></h3>
            </div>
        </div>
    );
};