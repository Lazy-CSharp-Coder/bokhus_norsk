
import { BookArticleText } from "@/types/languagetypes";
import { numberToWords } from "convert-number-to-words";

export interface BookInSeriesTextProps 
{
    bookInSeries: number,
    bookTitle: string,
    seriesName: string,
    sanityTagLanguage: string,
    bookArticleText: BookArticleText;
}

function getNumberInNorwegianWord(value: number)
{
    const numInNorwegian: string[] =
        [
            "første", "andre", "tredje", "fjerde", "femte", "sjette", "syvende", "åttende", "niende", "tiende",
            "ellevte", "tolvte", "trettende", "fjortende", "femtende", "sekstende", "syttende", "attende", "nittende", "tyvende"

        ];

    return numInNorwegian[value - 1];
}

export interface BookNumberTextProps 
{
    sanityTagLanguage : string,
    bookTextInLanguageSelected: string,
    bookInSeries: number,
    colorBookText?: string,
    colorNumberText?: string;
}

// selects "Book One" in selected language, word placement might be different depending on language

export function BookNumberText({ sanityTagLanguage, bookTextInLanguageSelected, bookInSeries, colorBookText, colorNumberText }: BookNumberTextProps)
{
    const tempString = sanityTagLanguage == "ENG" ? numberToWords(bookInSeries) : getNumberInNorwegianWord(bookInSeries);
    const numString =   tempString.charAt(0).toUpperCase() + tempString.slice(1);

    return (
         sanityTagLanguage == "ENG" ?
            <>

                <span style={{ color: colorBookText ? colorBookText : "" }}>{bookTextInLanguageSelected} </span>
                <span style={{ color: colorNumberText ? colorNumberText : "" }}>{numString} </span>
            </> :
            <>
             
                <span style={{ color: colorNumberText ? colorNumberText : "" }}>{numString} </span>
                <span style={{ color: colorBookText ? colorBookText : "" }}>{bookTextInLanguageSelected} </span>
            

            </>
    )
}

export function BookInSeriesText({ bookInSeries, bookTitle, seriesName,  bookArticleText, sanityTagLanguage }: BookInSeriesTextProps)
{
    const { book, ofThe, series } = bookArticleText;
    return (   
                <p className="bookInfo">
                    <BookNumberText sanityTagLanguage={sanityTagLanguage} bookTextInLanguageSelected={book} bookInSeries={bookInSeries}/>
                     {ofThe} <span className="bookNumberText">{seriesName} </span> {series}
                </p>
      
    );
}