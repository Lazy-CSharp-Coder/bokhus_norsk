
import { numberToWords } from "convert-number-to-words";
import "./BookInSerieText.module.css"

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
                <p className="bookInfo">
                   Book <span className="bookNumberText"> {numStr} </span>
                     of the <span className="bookNumberText">{serieName} </span> Series
                </p>
      
    );
}
