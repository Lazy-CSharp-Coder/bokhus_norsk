interface BokHusComProps 
{
    fontFamily?: string,
    fontSize?: string;
}
export function BokHus({ fontFamily, fontSize }: BokHusComProps)
{
    return (
        <span style={{ fontFamily: fontFamily ? fontFamily : "", fontSize: fontSize ? fontSize : "" }}><span style={{ color: "var(--bokhusRootsColor)" }}>Bok</span><span style={{ color: "var(--bokhusFutureColor)" }}>Hus</span></span>
    );
}