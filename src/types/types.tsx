
// BackgroundImageProps and corresponding animationtyp

type AnimTypes = "No Animation"| "RotateIn" | "FadeIn" | "ScaleIn";

export interface BackgroundImageProps 
{
    className : string,
    src? : string,
    animType?: AnimTypes,
    animDuration? : string,
    animDelay? : string
}

// end types BackgroundImage

// interface for sending message string to page

export interface PageProps
{
   searchParams: Promise<{ [key: string]: string | string[] | undefined; }>;
}
export interface MenuItemsHeader 
{
    name : string,
    pageLink : string
}


export interface HeaderProps
{
    background?: string,
    menuItems?: MenuItemsHeader[],
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
