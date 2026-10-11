interface BokHusComProps 
{
    fontFamily? : string,
    fontSize?: string
}

export function BokHusCom({fontFamily, fontSize} : BokHusComProps)
{
    return(
        <span style={{fontFamily :fontFamily ? fontFamily : "", fontSize : fontSize ? fontSize : ""}}><span style={{color: "var(--bokhusRootsColor)" }}>Bok</span><span style={{color: "var(--bokhusFutureColor)" }}>Hus</span>.com</span>
    )
}

export function BokHusNo({fontFamily, fontSize} : BokHusComProps)
{
    return(
        <span style={{fontFamily :fontFamily ? fontFamily : "", fontSize : fontSize ? fontSize : ""}}><span style={{color: "var(--bokhusRootsColor)" }}>Bok</span><span style={{color: "var(--bokhusFutureColor)" }}>Hus</span>.no</span>
    )
}