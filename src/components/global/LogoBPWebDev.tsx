import Image from "next/image";
import "./LogoBPWebDev.module.css";

export function LogoBPWebDev()
{
    return(
        <div className="logoBPWrapper">
            <Image className="logoBPImg" src="/icons/logoBP128px.png" alt="logo BP WebDev" fill/>
        </div>
    )

}