export interface BokHusComProps 
{
    fontFamily? : string,
    fontSize?: string
}

export function BokHusCom({fontFamily, fontSize} : BokHusComProps)
{
    return(
        <p style={{fontFamily :fontFamily ? fontFamily : "", fontSize : fontSize ? fontSize : "1rem"}}><span style={{color: "var(--bokhusRootsColor)" }}>Bok</span><span style={{color: "var(--bokhusFutureColor)" }}>Hus</span>.com</p>
    )
}