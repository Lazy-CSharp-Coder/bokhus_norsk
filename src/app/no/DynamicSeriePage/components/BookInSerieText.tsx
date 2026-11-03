
// import { numberToWords } from "convert-number-to-words";
import styles from  "./BookInSerieText.module.css"
import jsonNumberWordsBokmaal from "@/json/norwegianWordNumbersBokmaal.json";
import jsonNumberWordsNynorsk from "@/json/norwegianWordNumbersBokmaal.json";

export interface BookInSeriesTextProps 
{
    bookInSerie: number,
    serieName: string,

}

type Dialect = "Bokmål" | "Nynorsk";

export function numberToWordsNorwegian(num : number, dialect? : Dialect)
{
    const arrayToUse = dialect ? dialect == "Bokmål" ? jsonNumberWordsBokmaal : jsonNumberWordsNynorsk : jsonNumberWordsBokmaal;
    
    return arrayToUse[num];
}

export function BookInSerieText({ bookInSerie, serieName }: BookInSeriesTextProps)
{
    const numTemp = numberToWordsNorwegian(bookInSerie);
    const numStr = numTemp.charAt(0).toUpperCase() + numTemp.slice(1);

    return (   
                <p className={styles.bookInfoDiv}>
                  <span className={styles.bookNumberText}> {numStr} </span>
                    bok i serien <span className={styles.bookNumberText}>{serieName} </span> 
                </p>
      
    );
}
