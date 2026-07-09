
import { numberToWords } from "convert-number-to-words";
import "./BookInSerieText.module.css"

export interface BookInSeriesTextProps 
{
    bookInSerie: number,
    serieName: string,

}

export function BookInSerieText({ bookInSerie, serieName }: BookInSeriesTextProps)
{
    return (   
                <p className="bookInfo">
                   Book <span className="bookNumber"> {numberToWords(bookInSerie)}</span>
                     of the <span className="bookNumberText">{serieName} </span> Series
                </p>
      
    );
}
