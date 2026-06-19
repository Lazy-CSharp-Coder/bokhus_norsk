import languagesJson from "@/json/languages.json";
import type { LanguageText } from "@/types/languagetypes";
import type { QuoteBottomProps } from "@/types/types";

export function QuotesBottom({ fontSize, fontFamily, noAnim }: QuoteBottomProps)
{
    const colorCodes: string[] =
        [
            "rgb(178, 126, 29)", "#B8AEA3", "lightblue"
        ];

    const languageArray: LanguageText[] = languagesJson;
    const { heroPage } = languageArray[0];
    const animIncQuotesBottom = 1700;
    const waitForMain = 300;
    const waitForDescription = 800;

    return (
        <div className="quotesDivBottom flex" style={{fontFamily: fontFamily ? fontFamily : ""}}>
            {
                heroPage.quotesBottom.map((item, index) =>
                    <h3 key={index + "#HP#HERO_QUOTES#ABOUT"} className="quotesTextBottom fadeInAnimQuotes" style={{ color: colorCodes[index], animationDelay: noAnim ? "0" :  `${(index * animIncQuotesBottom) + waitForDescription}ms`, animationIterationCount : noAnim ? "0" : "1" ,  fontSize: fontSize  }}>{item}</h3>)

            }

        </div>
    );
}