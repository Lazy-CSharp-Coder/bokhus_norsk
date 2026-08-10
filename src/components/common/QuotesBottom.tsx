import languageJson from "@/json/languages.json"
import type { QuoteBottomProps } from "@/types/types";
import styles from "./QuotesBottom.module.css";
import { LanguageChosen } from "@/types/languagetypes";

export function QuotesBottom({ fontSize, fontFamily, noAnim }: QuoteBottomProps)
{
    const colorCodes: string[] =
        [
            "rgb(178, 126, 29)", "#B8AEA3", "lightblue"
        ];

  const language : LanguageChosen[] = languageJson;
    const { heroPage } = language[0];
    const animIncQuotesBottom = 1700;
    const waitForDescription = 800;

    return (
        <div className={`${styles.quotesDivBottom} flex`} style={{fontFamily: fontFamily ? fontFamily : ""}}>
            {
                heroPage.quotesBottom.map((item, index) =>
                    <h3 key={index + "#HP#HERO_QUOTES#ABOUT"} className={`${styles.quotesTextBottom} fadeInAnimQuotes`} style={{ color: colorCodes[index], animationDelay: noAnim ? "0" :  `${(index * animIncQuotesBottom) + waitForDescription}ms`, animationIterationCount : noAnim ? "0" : "1" ,  fontSize: fontSize  }}>{item}</h3>)

            }

        </div>
    );
}