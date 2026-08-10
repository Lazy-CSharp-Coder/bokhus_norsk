
import { numberToWords } from "convert-number-to-words";
import styles from  "./BookInSerieText.module.css"

export interface BookInSeriesTextProps 
{
    bookInSerie: number,
    serieName: string,

}

export function BookInSerieText({ bookInSerie, serieName }: BookInSeriesTextProps)
{
    const numTemp = numberToWords(bookInSerie);
    const numStr = numTemp.charAt(0).toUpperCase() + numTemp.slice(1);

    return (   
                <p className={styles.bookInfoDiv}>
                   Book <span className={styles.bookNumberText}> {numStr} </span>
                     of the <span className={styles.bookNumberText}>{serieName} </span> Series
                </p>
      
    );
}
