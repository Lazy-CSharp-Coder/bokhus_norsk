import { MenuItemsHeader } from "./types";

export interface QuotesHeading {
    start : string,
    end : string
}

export interface HeroPageText 
{
    quotesHeading : QuotesHeading[],
    descriptionBokhus : string[],
    quotesBottom : string[]
}

export interface LanguageText
{
    language: string,
    sanityTag: string,
    iconUrl: string,
    menuItemsHeader : MenuItemsHeader[],
    heroPage : HeroPageText


}

export interface LanguageChosen 
{
    languageNumber: number,
    language: string,
    sanityTag: string,
    menuItemsHeader : MenuItemsHeader[]
    heroPage : HeroPageText,


}

/* attributions flag
uk :
<a href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">Uk flag icons created by Freepik - Flaticon</a>
usa :
<a href="https://www.flaticon.com/free-icons/flag" title="flag icons">Flag icons created by Freepik - Flaticon</a>

norsk :

<a href="https://www.flaticon.com/free-icons/norway" title="norway icons">Norway icons created by Freepik - Flaticon</a>
*/