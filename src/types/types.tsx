
// BackgroundImageProps and corresponding animationtyp

import { IconType } from "react-icons";
// end types BackgroundImage

// interface for sending message string to page

export interface PageProps
{
   searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
}




export interface About {
    aboutHeading: string, 
    aboutText : string[]
}

export interface QuoteBottomProps
{
    fontSize: string,
    fontFamily?: string,
    noAnim? : boolean
}

export interface ExpandingLineProps 
{
    width? : string,
    lineSize : number, 
    lineType? : string,
    color? : string,
    animationDelay? : string,
    animationDuration? : string, 
}

export interface ReactIcons 
{
    name : string,
    IconToUse: IconType,
    size: string,
    className?: string,

}


export interface HeaderMenuItemProps extends ReactIcons {

    pageLink : string
}
